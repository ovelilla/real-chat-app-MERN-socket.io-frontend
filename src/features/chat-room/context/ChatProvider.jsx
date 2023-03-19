import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import axios from "@config/axios";
import io from "socket.io-client";
import useAuth from "@features/auth/hooks/useAuth";

const ChatContext = createContext();

export const ChatProvider = () => {
    const [socket, setSocket] = useState(io(import.meta.env.VITE_BACKEND_URL));
    const [loading, setLoading] = useState(true);
    const [chat, setChat] = useState(null);
    const [chats, setChats] = useState([]);
    const [contact, setContact] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [messages, setMessages] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        if (loading) {
            fetchData();
            return;
        }

        socket.emit("connect-user", user);

        socket.on("user-connected", (data) => {
            if (!contacts.length || !data) {
                return;
            }
            const newContacts = [...contacts];
            const index = newContacts.findIndex((contact) => contact._id === data._id);
            newContacts[index].isConnected = true;
            setContacts(newContacts);
        });

        socket.on("chat-created", (data) => {
            setChats((prev) => [...prev, data]);
        });

        socket.on("chat-updated", (data) => {
            if (data._id === chat?._id) {
                updateMessages();
                data.unreadCount = 0;
            }
            setChats((prev) => [...prev.map((c) => (c._id === data._id ? data : c))]);
        });

        socket.on("message-sended", (data) => {
            setMessages((prev) => [...prev, data]);
        });

        socket.on("user-disconnected", (data) => {
            if (!contacts.length || !data) {
                return;
            }
            const newContacts = [...contacts];
            const index = newContacts.findIndex((contact) => contact._id === data);
            newContacts[index].isConnected = false;
            setContacts(newContacts);
        });

        return () => {
            socket.disconnect();
        };
    }, [loading]);

    const fetchData = async () => {
        await Promise.all([readChats(), readContacts()]);
        setLoading(false);
    };

    const readChats = async () => {
        try {
            const { data } = await axios.get("/chats", {
                withCredentials: true,
            });
            setChats(data);
        } catch (error) {
            console.log(error);
        }
    };

    const updateMessages = async () => {
        try {
            const { data } = await axios.put(
                `/messages/${chat._id}`,
                { user },
                { withCredentials: true }
            );
        } catch (error) {
            console.log(error);
        }
    };

    const readContacts = async () => {
        try {
            const { data } = await axios.get("/users", {
                withCredentials: true,
            });
            setContacts(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ChatContext.Provider
            value={{
                socket,
                loading,
                setLoading,
                chat,
                setChat,
                chats,
                setChats,
                contact,
                setContact,
                contacts,
                setContacts,
                messages,
                setMessages,
            }}
        >
            <Outlet />
        </ChatContext.Provider>
    );
};

export default ChatContext;
