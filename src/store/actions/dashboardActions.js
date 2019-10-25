import { axiosInstance } from "../../utils/axiosInstance";

// LOGIN USER
export const BEGIN_LOGIN = 'BEGIN_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN FAILURE';

export const loginUser = credentials => dispatch => {
  dispatch({ type: BEGIN_LOGIN });

  axiosInstance
    .post("/auth/login", credentials)
    .then(res => {
      localStorage.setItem("snack-token", res.data.user_ID);
      return dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(error => dispatch({ type: LOGIN_FAILURE, payload: error.response }));
};

// UPDATE USER INFO
export const BEGIN_UPDATE_USER = "BEGIN_UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const updateUser = (id, data) => dispatch => {
  dispatch({ type: BEGIN_UPDATE_USER });

  axiosInstance
    .put(`/users/${id}`, data)
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch(error =>
      dispatch({ type: UPDATE_USER_FAILURE, payload: error.response.data })
    );
};

// GET USER INFO
export const BEGIN_GET_USER_INFO = "BEGIN_GET_USER_INFO";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE";

export const getUserInfo = id => dispatch => {
  dispatch({ type: BEGIN_GET_USER_INFO });

  axiosInstance
    .get(`/users/${id}`)
    .then(res => {
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: GET_USER_INFO_FAILURE, payload: error.response.data });
    });
};

// LOGOUT USER
export const BEGIN_LOGOUT = "BEGIN_LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const logoutUser = () => dispatch => {
  dispatch({ type: BEGIN_LOGOUT });

  axiosInstance
    .get(`/auth/logout`)
    .then(res => {
      localStorage.removeItem("snack-token");
      dispatch({ type: LOGOUT_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: LOGOUT_FAILURE, payload: error.response.data });
    });
};

// GET COMPANY USERS
export const BEGIN_GET_USERS = "BEGIN_GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getCompanyUsers = company_ID => dispatch => {
  dispatch({ type: BEGIN_GET_USERS });

  axiosInstance
    .get(`/company/${company_ID}/users`)
    .then(res => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: GET_USERS_FAILURE, payload: error.response });
    });
};

// DELETE USER FROM COMPANY
export const BEGIN_DELETE_USER = "BEGIN_DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";


export const deleteUser = (company_id, user_id) => dispatch => {

  dispatch({type:BEGIN_DELETE_USER});

  axiosInstance.delete(`/company/${company_id}/users/${user_id}`)
  .then(res =>{
    console.log(res.data);
    dispatch({type: DELETE_USER_SUCCESS, payload: user_id});
  }).catch(error =>{
    dispatch({type: DELETE_USER_FAILURE, payload: error.response});
  });
};
