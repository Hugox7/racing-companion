import { call, takeLatest, put } from 'redux-saga/effects';
import * as authActions from '../actions/auth';
import * as authTypes from '../types/auth';
import * as authApi from '../api/auth';

const storeToken = async (token) => {
    localStorage.setItem('token', token);
}

export function* loginSaga (action) {
    try {
        const response = yield call(authApi.login, {
            name: action.data.name,
            password: action.data.password,
        });

        yield call(storeToken, response.accessToken);
        return yield put(authActions.loginSuccess(response));

    } catch (err) {
        return yield put(authActions.loginFailed(err));
    }
}

export function* getUserSaga (action) {
    try {
        const response = yield call(authApi.getUser, action.data);
        delete response.password;
        return yield put(authActions.getUserSuccess(response));
    } catch (err) {
        return yield put(authActions.getUserFailed(err));
    }
}

export default function* authSaga() {
    yield takeLatest(authTypes.LOGIN, loginSaga);
    yield takeLatest(authTypes.GETUSER, getUserSaga);
}