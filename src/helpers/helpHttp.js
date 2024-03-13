import axios from 'axios';

const getToken = () => {
    const storage = JSON.parse(localStorage.getItem('sie-app'));
    if (storage !== null) {
        const { state } = storage;
        const { token } = state;
        return token;
    }
    return null;
}

const helpHttp = () => {
    const customAxios = async (url, options) => {
        const bearerToken = getToken();
        const defaultHeaders = {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + bearerToken,
        };

        options.headers = options.headers ? { ...defaultHeaders, ...options.headers } : defaultHeaders;

        options.data = options.body || {};
        delete options.body;

        options.timeout = 60000;

        try {
            const response = await axios({ url, ...options });
            return response.data;
        } catch (error) {
            return Promise.reject({
                err: true,
                status: error.response ? error.response.status : '00',
                statusText: error.response ? error.response.statusText : error
            });
        }
    };

    const get = (url, options = {}) => customAxios(url, options);
    const post = (url, options = {}) => customAxios(url, { ...options, method: 'POST' });
    const put = (url, options = {}) => customAxios(url, { ...options, method: 'PUT' });
    const patch = (url, options = {}) => customAxios(url, { ...options, method: 'PATCH' });
    const del = (url, options = {}) => customAxios(url, { ...options, method: 'DELETE' });

    return { get, post, put, patch, del };
};

export default helpHttp;