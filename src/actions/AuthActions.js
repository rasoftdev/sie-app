export const auth = (token, user) => ({
    type: 'LOGIN',
    payload: { token, user }
});

export const logout = () => ({
    type: 'LOGOUT'
});