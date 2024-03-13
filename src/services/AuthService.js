import axios from 'axios';
import helpHttp from '../helpers/helpHttp';

const { VITE_APP_API_SIE_URL } = import.meta.env;
const API_AUTH = `${VITE_APP_API_SIE_URL}/login`;
const API_REGISTER = `${VITE_APP_API_SIE_URL}/register`;
const API_LOGOUT = `${VITE_APP_API_SIE_URL}/logout`;
const API_REFRESH_TOKEN = `${VITE_APP_API_SIE_URL}/refresh`;
const API_CURRENT_USER = `${VITE_APP_API_SIE_URL}/me`;

const api = helpHttp();

class AuthService {
    async auth(email, password) {
        try {
            const { data } = await axios.post(API_AUTH, { email, password });
            const { status, access_token } = data;
            if (status) {
                return { status, access_token };
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async register(data) {
        const response = await axios.post(API_REGISTER, { data });
        return response.data;
    }

    async logout() {
        try {
            const { status } = await api.get(API_LOGOUT);
            return status;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async refreshToken() {

        try {
            const { status, access_token } = await api.get(API_REFRESH_TOKEN);
            if (status) {
                return { status, access_token };
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getCurrentUser() {
        try {
            const { data, status } = await api.get(API_CURRENT_USER);
            if (status) {
                return data;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export default new AuthService();