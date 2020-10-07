import { combineReducers } from 'redux';
import * as authTypes from '../types/auth';

const userInitialState = {
    loading: false,
    loginError: null,
    userError: null,
    isConnected: false,
}

const signupInititalState = {
    loading: false,
    error: null,
    message: null,
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
                user: action.data,
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
                userError: null,
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

const signup = (state = signupInititalState, action) => {
    switch (action.type) {
        case authTypes.SIGNUP:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case authTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.data,
            };
        case authTypes.SIGNUP_FAILED:
            return {
                ...state,
                loading: false,
                error: action.data,
            };
        default:
            return state;
    }
}

export default combineReducers({
    login,
    signup
});