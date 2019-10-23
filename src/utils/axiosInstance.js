import axios from 'axios';

axios.defaults.withCredentials = true;

export const axiosInstance = () =>{

    return axios.create({
        baseURL: 'https://afternoon-tor-81402.herokuapp.com',
        headers:{
            withCredentials: true,
        },
    });
};