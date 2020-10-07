import { combineReducers } from 'redux';
import auth from './auth';
import championship from './championship';

const mainReducer = combineReducers({
    auth,
    championship,
});

export default mainReducer;