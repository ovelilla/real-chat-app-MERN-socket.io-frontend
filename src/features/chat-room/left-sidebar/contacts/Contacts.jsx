import useAuth from "@features/auth/hooks/useAuth";
import useChat from "@features/chat-room/hooks/useChat";
import Contact from "@features/chat-room/left-sidebar/contact";
import { StyledContacts, Container, Title, Message } from "./styles";

const Contacts = () => {
    const { user } = useAuth();
    const { contacts } = useChat();

    return (
        <StyledContacts>
            <Title>Contactos</Title>

            <Container>
                {contacts.map((contact) => {
                    if (contact._id !== user._id) {
                        return <Contact key={contact._id} contact={contact} />;
                    }
                })}

                {!contacts.length && <Message>No hay contactos</Message>}
            </Container>
        </StyledContacts>
    );
};

export default Contacts;
