const initialState = {
    isLoggedIn: false,
    token: null,
    user: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true,
                token: action.payload.token,
                user: action.payload.user
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default AuthReducer;