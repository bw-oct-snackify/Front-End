import axios from 'axios';

export const registerUser = (userData) => dispatch =>{
    axios.post('https://afternoon-tor-81402.herokuapp.com/auth/register', userData)
    .then(res =>{
        
    })
};