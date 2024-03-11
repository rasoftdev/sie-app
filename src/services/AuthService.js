import axios from 'axios';

const { VITE_APP_API_URL } = import.meta.env;
const API_AUTH = `${VITE_APP_API_URL}/login`;
const API_REGISTER = `${VITE_APP_API_URL}/register`;
const API_LOGOUT = `${VITE_APP_API_URL}/logout`;
const API_REFRESH_TOKEN = `${VITE_APP_API_URL}/refresh`;
const API_CURRENT_USER = `${VITE_APP_API_URL}/me`;

class AuthService {
    async auth(username, password) {
        try {
            const { status, token } = await axios.post(API_AUTH, { username, password });
            if (status) {
                return { status, token };
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
            const { status } = await axios.get(API_LOGOUT);
            return status;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async refreshToken() {

        try {
            const { status, access_token } = await axios.get(API_REFRESH_TOKEN);
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
            const { status, user } = await axios.get(API_CURRENT_USER);
            if (status) {
                return user;
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