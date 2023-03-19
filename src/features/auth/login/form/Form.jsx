import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "@config/axios";
import useForm from "@hooks/useForm";
import useAuth from "@features/auth/hooks/useAuth";
import { StyledForm } from "./styles";

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const { setAuth, setUser } = useAuth();
    const { values, errors, handleChange, setFormErrors, resetForm } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const { data } = await axios.post("/users/login", values, {
                withCredentials: true,
            });
            resetForm();
            setAuth(true);
            setUser(data);
            navigate("/");
        } catch (error) {
            setFormErrors(error.response.data.errors);
        } finally {
            setLoading(false);
        }
    };

    return (
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

            <FormControlLabel
                sx={{ gap: 1 }}
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
            />

            <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                sx={{ mt: 1 }}
                loading={loading}
            >
                Iniciar sesión
            </LoadingButton>
        </StyledForm>
    );
};

export default Form;
