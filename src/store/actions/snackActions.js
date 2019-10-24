import { axiosInstance } from '../../utils/axiosInstance';

export const UPDATE_SNACKS = 'update_snacks';
export const getCompanySnacks = user => dispatch => {
    axiosInstance.get(`/company/${user.company_id}/snacks`).then(res => {
        dispatch({ type: UPDATE_SNACKS, payload: res.data.snacks });
    });
};

export const UPDATE_SUGGESTIONS = 'update_suggestions';
export const getUserSuggestions = user => dispatch => {
    axiosInstance.get(`/users/${user.user_id}`).then(res => {
        dispatch({ type: UPDATE_SUGGESTIONS, payload: res.data.snacks });
    });
};

export const getCompanySuggestions = user => dispatch => {
    axiosInstance.get(`/company/${user.company_id}/suggestions`).then(res => {
        console.log(res.data);
        console.log('SNACKS: ', res.data.snacks);
        dispatch({ type: UPDATE_SUGGESTIONS, payload: res.data.snacks });
    });
};

export const GET_ALL_SNACKS = 'get_all_snacks';
export const getAllSnacks = () => dispatch => {
    axiosInstance.get('/snacks').then(res => {
        dispatch({ type: GET_ALL_SNACKS, payload: res.data.snacks });
    });
};

export const ADD_SNACK_TO_SUGGESTIONS = 'add_snacks_to_suggested';
export const addSnackToSuggestions = (user, snack) => dispatch => {
    console.log(snack);
    axiosInstance
        .post(`/users/${user.user_id}/snacks/${snack.snack_ID}`)
        .then(res => {
            dispatch({ type: ADD_SNACK_TO_SUGGESTIONS, payload: snack });
        });
};

export const ADD_SNACK_TO_COMPANY = 'add_snack_to_company';
export const addSnackToCompany = (user, snack) => dispatch => {
    axiosInstance
        .post(`/company/${user.company_id}/snacks/${snack.snack_ID}`)
        .then(res => {
            console.log(res.data);
            dispatch({ type: ADD_SNACK_TO_COMPANY, payload: snack });
        });
};

export const searchSnacks = search => dispatch => {
    axiosInstance.get(`/snacks?search=${search}`).then(res => {
        dispatch({ type: GET_ALL_SNACKS, payload: res.data.snacks });
    });
};
