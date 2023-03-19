import { useState } from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "@config/axios";
import useForm from "@hooks/useForm";
import { StyledForm } from "./styles";

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const { values, errors, handleChange, setFormErrors, resetForm } = useForm({
        email: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const { data } = await axios.post("/users/recover", values, {
                withCredentials: true,
            });
            resetForm();
            setSent(true);
        } catch (error) {
            setFormErrors(error.response.data.errors);
        } finally {
            setLoading(false);
        }
    };

    return !sent ? (
        <StyledForm onSubmit={handleSubmit} noValidate>
            <TextField
                name="email"
                label="Email"
                autoComplete="email"
                type="email"
                autoFocus
                required
                value={values.email}
                error={errors.email.length > 0}
                helperText={errors.email}
                onChange={handleChange}
            />

            <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
                loading={loading}
            >
                Recuperar
            </LoadingButton>
        </StyledForm>
    ) : (
        <>
            <Alert severity="success">
                <AlertTitle>¡Listo!</AlertTitle>
                Te hemos enviado un email con las instrucciones para recuperar tu contraseña.
                <br />
            </Alert>
        </>
    );
};

export default Form;
