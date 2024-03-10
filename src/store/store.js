import { createStore } from 'redux';

const initialState = {
    user: null,
    permissions: [],
    token: null,
};

const SET_USER = 'SET_USER';
const SET_PERMISSIONS = 'SET_PERMISSIONS';
const SET_TOKEN = 'SET_TOKEN';

export function setUser(user) {
    return { type: SET_USER, payload: user };
}

export function setPermissions(permissions) {
    return { type: SET_PERMISSIONS, payload: permissions };
}

export function setToken(token) {
    return { type: SET_TOKEN, payload: token };
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        case SET_PERMISSIONS:
            return { ...state, permissions: action.payload };
        case SET_TOKEN:
            return { ...state, token: action.payload };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;