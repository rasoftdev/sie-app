import { combineReducers } from 'redux';
import AuthReducer from './Auth/AuthReducers';

const rootReducer = combineReducers({
    auth: AuthReducer
});

export default rootReducer;