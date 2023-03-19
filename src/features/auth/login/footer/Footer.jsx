import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link';
import { StyledFooter } from "./styles";

const Footer = () => {
    return (
        <StyledFooter>
            <Link component={RouterLink} to="/registrar" variant="body2">
                ¿No tienes cuenta? Regístrate
            </Link>

            <Link component={RouterLink} to="/recuperar" variant="body2">
                ¿Olvidaste la contraseaña?
            </Link>
        </StyledFooter>
    );
};

export default Footer;
