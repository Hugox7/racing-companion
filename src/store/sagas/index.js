import { fork } from 'redux-saga/effects';
import auth from './auth';
import champ from './championship';

export default function* mainSaga() {
    yield fork(auth);
    yield fork(champ);
}