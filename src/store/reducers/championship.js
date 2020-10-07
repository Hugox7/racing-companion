import { combineReducers } from 'redux';
import * as champTypes from '../types/championship';

const champInitialState = {
    loading: false,
    error: null,
    data: {},
}

const championship = (state = champInitialState, action) => {
    switch (action.type) {
        case champTypes.GET_CHAMPIONSHIP:
            return {
                ...state,
                loading: true,
            };
        case champTypes.GET_CHAMPIONSHIP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
            };
        case champTypes.GET_CHAMPIONSHIP_FAILED:
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
    championship,
});