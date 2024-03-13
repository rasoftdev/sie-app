import React, { createContext, useState } from "react";
import AuthService from "../services/AuthService.js";
import useSieStore from "../store/Store.js";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const { setToken, setUser } = useSieStore();
    const handleAuth = async (payload) => {
        try {
            const data = await AuthService.auth(payload.email, payload.password);
            const { status, access_token } = data;
            if (status) {
                setToken(access_token);
                setTimeout(async () => {
                    const user = await AuthService.getCurrentUser();
                    setUser(user);
                }, 500);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    const handleLogout = () => {
        try {
            AuthService.logout();
        } catch (error) {
            console.log(error);
        }
    }
    const handleRegister = () => {
        console.log("Register");
    }
    const handleRecoverPassword = () => {
        console.log("RecoverPassword");
    }
    const handleRefreshToken = () => {
        try {
            AuthService.refreshToken();
        } catch (error) {
            console.log(error);
        }
    }
    const data = {
        handleAuth,
        handleLogout,
        handleRegister,
        handleRecoverPassword,
        handleRefreshToken,
        loading
    };
    return React.createElement(AuthContext.Provider, { value: data }, children);
};
export { AuthProvider };
export default AuthContext;