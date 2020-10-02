import * as authTypes from '../types/auth';

//login
export const login = (data) => ({
    type: authTypes.LOGIN,
    data,
});

export const loginSuccess = (data) => ({
    type: authTypes.LOGIN_SUCCESS,
    data,
});

export const loginFailed = (data) => ({
    type: authTypes.LOGIN_FAILED,
    data,
});

//register
export const signup = (data) => ({
    type: authTypes.SIGNUP,
    data,
});

export const signupSuccess = (data) => ({
    type: authTypes.SIGNUP_SUCCESS,
    data,
});

export const signupFailed = (data) => ({
    type: authTypes.SIGNUP_FAILED,
    data,
});

//logout
export const logout = () => ({
    type: authTypes.LOGOUT,
});

export const logoutSuccess = () => ({
    type: authTypes.LOGOUT,
});

export const logoutFailed = () => ({
    type: authTypes.LOGOUT,
});

//user
export const getUser = (data) => ({
    type: authTypes.GETUSER,
    data,
})

export const getUserSuccess = (data) => ({
    type: authTypes.GETUSER_SUCCESS,
    data,
})

export const getUserFailed = (data) => ({
    type: authTypes.GETUSER_FAILED,
    data,
})