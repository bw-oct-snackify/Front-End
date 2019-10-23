import {axiosInstance} from '../../utils/axiosInstance';
import axios from 'axios';

axios.defaults.withCredentials = true;

// LOGIN USER AND GET THEIR INFO
export const BEGIN_LOGIN = 'BEGIN_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN FAILURE';

export const loginUser = credentials => dispatch =>{

    dispatch({type: BEGIN_LOGIN});

    axiosInstance().post('/auth/login', credentials)
        .then(res =>{
            localStorage.setItem('snack-token', res.data.user_ID);
            return dispatch({type: LOGIN_SUCCESS, payload: res.data});
        })
        .catch(error => dispatch({type: LOGIN_FAILURE, payload: error.response}));
};

// UPDATE USER INFO
export const BEGIN_UPDATE_USER = 'BEGIN_UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const updateUser = (id, data) => dispatch =>{
    dispatch({type: BEGIN_UPDATE_USER});

    // axiosInstance().put(`/users/${id}`, data)
    axios.put(`https://afternoon-tor-81402.herokuapp.com/users/${id}`, data)
    .then(res =>{
        dispatch({type: UPDATE_USER_SUCCESS, payload: res.data})
    })
    .catch(error => dispatch({type:UPDATE_USER_FAILURE, payload: error.response.data}));
};


// GET USER INFO
export const BEGIN_GET_USER_INFO = 'BEGIN_UPDATE_USER';
export const GET_USER_INFO_SUCCESS = 'UPDATE_USER_SUCCESS';
export const GET_USER_INFO_FAILURE = 'UPDATE_USER_FAILURE';

export const getUserInfo = (id) => dispatch =>{
    dispatch({type: BEGIN_UPDATE_USER});

    axios.get(`https://afternoon-tor-81402.herokuapp.com/users/${id}`)
    .then(res =>{

    })
    .catch(error =>{

    });

};

// DELETE USER FROM COMPANY
export const DELETE_USER = 'DELETE_USER';

export const deleteUser = id => dispatch =>{
    console.log(`dashboardActions here reporting the user you want to delete has an id of : ${id}! Passing it on to my buddy reducer!`);
    dispatch({
        type: DELETE_USER,
         payload: id
        });
};