import api from './_client';

export const login = async (payload) => {
    return api.post('/auth/signin', payload);
}

export const signup = async (payload) => {
    return api.post('/auth/signup', payload);
}

export const logout = async () => {
    return api.post('/auth/logout');
}

export const getUser = async (data) => {
    return api.get('/user', {
        headers: {
            'x-access-token': data,
        }
    })
}