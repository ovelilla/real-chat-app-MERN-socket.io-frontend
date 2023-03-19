import { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "@features/auth/hooks/useAuth";
import axios from "@config/axios";

const PrivateRoute = () => {
    const [loading, setLoading] = useState(true);
    const { auth, setAuth, setUser } = useAuth();

    const navigate = useNavigate();

    const getAuth = async () => {
        try {
            const { data } = await axios.get("/users/auth", {
                withCredentials: true,
            });
            setAuth(true);
            setUser(data);
        } catch (error) {
            setAuth(false);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAuth();
    }, [navigate]);

    if (loading) {
        return "Loading...";
    }

    if (!auth) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
