import {
    StyledChat,
    Avatar,
    Name,
    Status,
    LastMessage,
    StyledDate,
    UnreadMessages,
} from "./styles";
import axios from "@config/axios";
import useAuth from "@features/auth/hooks/useAuth";
import useChat from "@features/chat-room/hooks/useChat";

const Chat = ({ chat }) => {
    const { user } = useAuth();
    const { socket, setChat, chats, setChats, contacts, setContact, setMessages } = useChat();

    const handleClick = async () => {
        try {
            const { data } = await axios.get(`/messages/${chat._id}`, {
                withCredentials: true,
            });

            socket.emit("join-chat", chat._id);
            setContact(chat.users.find((u) => u._id !== user._id));
            setChat(chat);
            setChats(chats.map((c) => (c._id === chat._id ? { ...c, unreadCount: 0 } : c)));
            setMessages(data);
        } catch (error) {
            console.log(error);
        }
    };

    const contact = contacts.find((c) => c._id === chat.users.find((u) => u._id !== user._id)._id);

    return (
        <StyledChat onClick={handleClick}>
            <Avatar>
                <span>{contact.name[0]}</span>
                <Status isConnected={contact.isConnected} />
            </Avatar>

            <Name>{contact.name}</Name>

            <LastMessage>{chat.lastMessage.message}</LastMessage>

            <StyledDate>{"Jueves"}</StyledDate>

            {chat.unreadCount > 0 && (
                <UnreadMessages>
                    <span>{chat.unreadCount}</span>
                </UnreadMessages>
            )}
        </StyledChat>
    );
};

export default Chat;
