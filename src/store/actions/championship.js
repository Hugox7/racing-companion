import * as champTypes from '../types/championship';

//get by id
export const getById = (data) => ({
    type: champTypes.GET_CHAMPIONSHIP,
    data
});

export const getByIdSuccess = (data) => ({
    type: champTypes.GET_CHAMPIONSHIP_SUCCESS,
    data,
});

export const getByIdFailed = (data) => ({
    type: champTypes.GET_CHAMPIONSHIP_FAILED,
    data,
});


//create
export const create = (data) => ({
    type: champTypes.CREATE_CHAMPIONSHIP,
    data,
});

export const createSuccess = (data) => ({
    type: champTypes.CREATE_CHAMPIONSHIP_SUCCESS,
    data,
});

export const createFailed = (data) => ({
    type: champTypes.CREATE_CHAMPIONSHIP_FAILED,
    data,
});
