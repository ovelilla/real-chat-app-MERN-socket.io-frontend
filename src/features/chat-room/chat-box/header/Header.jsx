import { StyledHeader, User, Avatar, Name, Status } from "./styles";

const Header = ({ contact }) => {
    return (
        <StyledHeader>
            <User>
                <Avatar>
                    <span>{contact.name[0]}</span>
                    <Status isConnected={contact?.isConnected} />
                </Avatar>
                <Name>{contact.name}</Name>
            </User>
        </StyledHeader>
    );
};

export default Header;
