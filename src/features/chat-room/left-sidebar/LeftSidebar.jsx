import useChat from "@features/chat-room/hooks/useChat";
import Header from "@features/chat-room/left-sidebar/header";
import Chats from "@features/chat-room/left-sidebar/chats";
import Contacts from "@features/chat-room/left-sidebar/contacts";
import { StyledLeftSidebar, Container, Footer } from "./styles";

const LeftSidebar = () => {
    const { loading } = useChat();

    return (
        <StyledLeftSidebar>
            <Header />
            {loading && <div>Loading...</div>}

            <Container>
                {!loading && <Chats />}
                {!loading && <Contacts />}
            </Container>
            <Footer></Footer>
        </StyledLeftSidebar>
    );
};

export default LeftSidebar;
