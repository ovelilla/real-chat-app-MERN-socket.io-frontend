import useChat from "@features/chat-room/hooks/useChat";
import Chat from "@features/chat-room/left-sidebar/chat";
import { StyledChats, Container, Title, Message } from "./styles";

const Chats = () => {
    const { chats } = useChat();

    return (
        <StyledChats>
            <Title>Chats</Title>

            <Container>
                {chats.map((chat) => (
                    <Chat key={chat._id} chat={chat} />
                ))}
                {!chats.length && <Message>No hay chats</Message>}
            </Container>
        </StyledChats>
    );
};

export default Chats;
