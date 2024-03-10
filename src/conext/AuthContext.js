import { createContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setPermissions, setToken } from '../store';

import axios from "axios";

const { REACT_APP_API_URL } = process.env;
const API_AUTH = `${REACT_APP_API_URL}login`;
const API_REGISTER = `${REACT_APP_API_URL}register`;
const API_REFRESH_TOKEN = `${REACT_APP_API_URL}refresh`;
const API_LOGOUT = `${REACT_APP_API_URL}logout`;
const API_PROFILE = `${REACT_APP_API_URL}me`;


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const permissions = useSelector(state => state.permissions);
    const token = useSelector(state => state.token);

    const login = async (data) => {
        const { status, token } = await axios.post(API_AUTH, data);
        if (status) {
            dispatch(setToken(token));
        }
    };

    const logout = async () => {
        dispatch(setUser(null));
        dispatch(setPermissions([]));
        dispatch(setToken(null));
    };

    const data = {
        user,
        permissions,
        token,
        login,
        logout,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthContext;