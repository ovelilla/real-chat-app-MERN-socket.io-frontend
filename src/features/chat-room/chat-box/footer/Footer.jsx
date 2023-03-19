import SendIcon from "@mui/icons-material/Send";
import axios from "@config/axios";
import useChat from "@features/chat-room/hooks/useChat";
import useForm from "@hooks/useForm";
import { StyledFooter, Form, Input, Button } from "./styles";

const Footer = () => {
    const { socket, chat, setChat, chats, setChats, contact, messages, setMessages } = useChat();
    const { values, handleChange, resetForm } = useForm({
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!values.message) {
            return;
        }

        try {
            const { data } = await axios.post(
                "/messages",
                { chat, contact, message: values.message },
                { withCredentials: true }
            );

            if (!chat) {
                socket.emit("join-chat", data.chat._id);
                socket.emit("create-chat", { chat: data.chat, contact });
                data.chat.unreadCount = 0;
                setChats([...chats, data.chat]);
                // setMessages([...messages, data.message]);
            } else {
                socket.emit("update-chat", { chat: data.chat, contact });
                data.chat.unreadCount = 0;
                setChats([...chats.map((c) => (c._id === data.chat._id ? data.chat : c))]);
            }
            setChat(data.chat);
            socket.emit("send-message", data.message);
            setMessages([...messages, data.message]);

            resetForm();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <StyledFooter>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="message"
                    placeholder="Escribe un mensaje"
                    value={values.message}
                    onChange={handleChange}
                />
                <Button type="submit">
                    <SendIcon />
                </Button>
            </Form>
        </StyledFooter>
    );
};

export default Footer;
