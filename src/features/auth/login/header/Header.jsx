import LockOutlined from "@mui/icons-material/LockOutlined";
import { StyledHeader, Icon, Title } from "./styles";

const Header = () => {
    return (
        <StyledHeader>
            <Icon>
                <LockOutlined />
            </Icon>
            <Title>Iniciar sesión</Title>
        </StyledHeader>
    );
};

export default Header;
