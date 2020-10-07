import api from './_client';

const token = localStorage.getItem('token');

export const getChamp = async (data) => {
    return api.get(`/championship/get/${data.userId}/${data.champId}`, {
        headers: { 'x-access-token': token },
    })
}

