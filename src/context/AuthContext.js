import React, { createContext, useState } from "react";
import AuthService from "../services/AuthService.js";
import useSieStore from "../store/Store.js";
import { useToast } from "../hooks/useToast.js";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const { setToken, setUser } = useSieStore();
    const [success, setSuccess] = useState(false);
    const { successAlert, warningAlert, errorAlert } = useToast();
    const handleAuth = async (payload) => {
        try {
            const data = await AuthService.auth(payload.email, payload.password);
            if (data !== null) {
                const { status, access_token } = data;
                if (status) {
                    setToken(access_token);
                    setSuccess(true);
                    setTimeout(async () => {
                        const user = await AuthService.getCurrentUser();
                        setUser(user);
                    }, 500);
                } else {
                    setSuccess(false);
                    warningAlert('Usuario o contraseña incorrectos');
                }
            } else {
                setSuccess(false);
                warningAlert('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.log(error);
            errorAlert('Hubo un error intente mas tarde');
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
        loading,
        success,
        setSuccess,
    };
    return React.createElement(AuthContext.Provider, { value: data }, children);
};
export { AuthProvider };
export default AuthContext;