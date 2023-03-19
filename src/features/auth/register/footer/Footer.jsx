import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link';
import { StyledFooter } from "./styles";

const Footer = () => {
    return (
        <StyledFooter>
            <Link component={RouterLink} to="/login" variant="body2">
                ¿Ya tienes cuenta? Inicia sesión
            </Link>

            <Link component={RouterLink} to="/recuperar" variant="body2">
                ¿Olvidaste la contraseaña?
            </Link>
        </StyledFooter>
    );
};

export default Footer;
