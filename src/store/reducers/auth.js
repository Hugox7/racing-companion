import { combineReducers } from 'redux';
import * as authTypes from '../types/auth';

const userInitialState = {
    loading: false,
    loginError: null,
    userError: null,
    isConnected: false,
}

const login = (state = userInitialState, action) => {
    switch (action.type) {
        case authTypes.LOGIN:
            return {
                ...state,
                loginError: null,
                loading: true,
            };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.data,
                loading: false,
                isConnected: true,
            };
        case authTypes.LOGIN_FAILED:
            return {
                ...state,
                loginError: action.data,
                loading: false,
                isConnected: false,
            };
        case authTypes.GETUSER:
             return {
                ...state,
                userError: null,
                loading: true,
                isConnected: false,
             };
        case authTypes.GETUSER_SUCCESS:
             return {
                ...state,
                loading: false,
                isConnected: true,
                user: action.data,
             };
            case authTypes.GETUSER_FAILED:
             return {
                ...state,
                loading: false,
                isConnected: false,
                userError: action.data,
             };
        default:
            return state;
    }
}

export default combineReducers({
    login,
});