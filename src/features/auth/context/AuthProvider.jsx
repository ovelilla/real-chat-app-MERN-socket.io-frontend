import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import axios from "@config/axios";

const AuthContext = createContext();

export const AuthProvider = () => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(null);

    const logout = async () => {
        try {
            await axios.get("/users/logout", {
                withCredentials: true,
            });
            setAuth(false);
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                user,
                setUser,
                logout,
            }}
        >
            <Outlet />
        </AuthContext.Provider>
    );
};

export default AuthContext;
