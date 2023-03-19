import useAuth from "@features/auth/hooks/useAuth";
import { Row, Container, Bubble } from "./styles";

const Message = ({ message }) => {
    const { user } = useAuth();

    return (
        <Row>
            <Container type={user._id === message.sender._id ? "out" : "in"}>
                <Bubble type={user._id === message.sender._id ? "out" : "in"}>
                    {message.message}
                </Bubble>
            </Container>
        </Row>
    );
};

export default Message;
