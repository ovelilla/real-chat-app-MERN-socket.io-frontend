import { useRef, useEffect } from "react";
import useAuth from "@features/auth/hooks/useAuth";
import useChat from "@features/chat-room/hooks/useChat";
import Header from "@features/chat-room/chat-box/header";
import Footer from "@features/chat-room/chat-box/footer";
import Message from "@features/chat-room/chat-box/message";
import ChatBubbleDots from "@icons/ChatBubbleDots";
import { StyledChatBox, Chat, Wellcome } from "./styles";

const ChatBox = () => {
    const chatRef = useRef(null);

    const { user } = useAuth();
    const { chat, contact, messages } = useChat();

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chat]);

    return (
        <StyledChatBox>
            {contact && <Header contact={contact} />}

            {contact && (
                <Chat ref={chatRef}>
                    {messages.map((message) => (
                        <Message key={message._id} message={message} />
                    ))}
                </Chat>
            )}

            {!contact && (
                <Wellcome>
                    <ChatBubbleDots />
                    <span>Selecciona una conversación para empezar a chatear</span>
                </Wellcome>
            )}

            {contact && <Footer />}
        </StyledChatBox>
    );
};

export default ChatBox;
