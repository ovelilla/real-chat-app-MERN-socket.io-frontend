import { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Alert, AlertTitle, Link } from "@mui/material";
import axios from "@config/axios";
import Header from "@features/auth/confirm/header";
import Body from "@features/auth/confirm/body";

const Confirm = () => {
    const [confirmed, setConfirmed] = useState(false);
    const [alert, setAlert] = useState({ type: "", message: "" });

    const { token } = useParams();

    const confirm = async () => {
        try {
            const { data } = await axios.get(`/users/confirm/${token}`, {
                withCredentials: true,
            });
            setConfirmed(true);
            setAlert({
                type: "success",
                message: data.message,
            });
        } catch (error) {
            setAlert({
                type: "error",
                message: error.response.data.message,
            });
        }
    };

    useEffect(() => {
        confirm();
    }, []);

    return (
        <>
            <Header />

            <Body>
                {alert.message && (
                    <Alert severity={alert.type}>
                        <AlertTitle>{alert.type === "error" ? "Error" : "Éxito"}</AlertTitle>
                        {alert.message}
                    </Alert>
                )}

                {confirmed && (
                    <Link component={RouterLink} to="/login" variant="body2">
                        Inicia sesión
                    </Link>
                )}
            </Body>
        </>
    );
};

export default Confirm;
