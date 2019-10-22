// import axiosInstance from '../../utils/axiosInstance';

export const DELETE_USER = 'DELETE_USER';

export const deleteUser = id => dispatch =>{
    console.log(`dashboardActions 2.0 here reporting the user you want to delete has an id of : ${id}! Passing it on to my buddy reducer!`);
    dispatch({
        type: DELETE_USER,
         payload: id
        });
};