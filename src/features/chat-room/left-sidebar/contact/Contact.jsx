import { StyledContact, Avatar, Name, Status } from "./styles";
import axios from "@config/axios";
import useChat from "@features/chat-room/hooks/useChat";

const Contact = ({ contact }) => {
    const { socket, setChat, chats, setContact, setMessages } = useChat();

    const handleClick = async () => {
        const chat = chats.find((chat) => chat.users.some((user) => user._id === contact._id));

        if (chat) {
            try {
                const { data } = await axios.get(`/messages/${chat._id}`, {
                    withCredentials: true,
                });
                socket.emit("join-chat", chat._id);
                setContact(contact);
                setChat(chat);
                setMessages(data);
            } catch (error) {
                console.log(error);
            }
        } else {
            setContact(contact);
            setChat(null);
            setMessages([]);
        }
    };

    return (
        <StyledContact onClick={handleClick}>
            <Avatar>
                <span>{contact.name[0]}</span>
                <Status isConnected={contact.isConnected} />
            </Avatar>
            <Name>{contact.name}</Name>
        </StyledContact>
    );
};

export default Contact;
