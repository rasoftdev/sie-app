import React, { createContext, useState } from "react";
import AuthService from "../services/AuthService";
import AppStore from "../store/store";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const { setToken, setUser } = AppStore();
    const handleAuth = async (data) => {
        try {
            await AuthService.auth(data.username, data.password);
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