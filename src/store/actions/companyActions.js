import { axiosInstance } from '../../utils/axiosInstance';

export const UPDATE_SNACKS = 'update_snacks';
export const getCompanySnacks = user => dispatch => {
    axiosInstance.get(`/company/${user.company_id}/snacks`).then(res => {
        dispatch({ type: UPDATE_SNACKS, payload: res.data.snacks });
    });
};
