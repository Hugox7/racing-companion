import { call, takeLatest, put } from 'redux-saga/effects';
import * as champActions from '../actions/championship';
import * as champTypes from '../types/championship';
import * as champApi from '../api/championship';

export function* getChampSaga (action) {
    try {
        const response = yield call(champApi.getChamp, action.data);
        return yield put(champActions.getByIdSuccess(response));
    } catch (err) {
        return yield put(champActions.getByIdFailed(err));
    }
}

export default function* champSaga() {
    yield takeLatest(champTypes.GET_CHAMPIONSHIP, getChampSaga);
}