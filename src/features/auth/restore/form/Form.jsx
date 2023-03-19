import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "@config/axios";
import useForm from "@hooks/useForm";
import { StyledForm } from "./styles";

const Form = () => {
    const [restored, setRestored] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState({ type: "", message: "" });

    const { values, errors, handleChange, setFormErrors, resetForm } = useForm({
        password: "",
        confirmPassword: "",
    });

    const { token } = useParams();

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        console.log("token", token);
        try {
            await axios.get(`/users/check-token/${token}`);
        } catch (error) {
            setAlert({
                type: "error",
                message: error.response.data.message,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        values.token = token;

        setLoading(true);
        try {
            const { data } = await axios.post("/users/restore", values, {
                withCredentials: true,
            });
            resetForm();
            setRestored(true);
            setAlert({ type: "success", message: data.message });
        } catch (error) {
            setFormErrors(error.response.data.errors);
            setAlert({ type: "error", message: error.response.data.message });
        } finally {
            setLoading(false);
        }
    };

    if (alert.message) {
        return (
            <Alert severity={alert.type}>
                <AlertTitle>{alert.type === "error" ? "Error" : "Éxito"}</AlertTitle>
                {alert.message}
            </Alert>
        );
    }

    return (
        !restored && (
            <StyledForm onSubmit={handleSubmit} noValidate>
                <TextField
                    name="password"
                    label="Password"
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={values.password}
                    error={errors.password.length > 0}
                    helperText={errors.password}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={(e) => e.preventDefault()}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    name="confirmPassword"
                    label="Confirmar password"
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={values.confirmPassword}
                    error={errors.confirmPassword.length > 0}
                    helperText={errors.confirmPassword}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={(e) => e.preventDefault()}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
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
                    Restaurar
                </LoadingButton>
            </StyledForm>
        )
    );
};

export default Form;
