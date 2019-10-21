import axios from 'axios';

export const axiosInstance = () =>{

    return axios.create({
        baseURL: 'https://afternoon-tor-81402.herokuapp.com',
        headers:{
            withCredentials: true,
        },
    });
};