import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link';
import { StyledFooter } from "./styles";

const Footer = () => {
    return (
        <StyledFooter>
            <Link component={RouterLink} to="/login" variant="body2">
                ¿Ya tienes cuenta? Inicia sesión
            </Link>

            <Link component={RouterLink} to="/registrar" variant="body2">
                ¿No tienes cuenta? Regístrate
            </Link>
        </StyledFooter>
    );
};

export default Footer;
