const initState = {
    userInfo:{
        email:'',
        password:'',
        companyCode: '',
    },
    companyInfo:{
        companyName: '',
        companyPhone: '',
        companyCity: '',
        companyState: '',
    },
    snackBundle: '',
}

export const registerReducer = (state = initState, action) =>{
    switch(action.type){
        default:
            return{...state};
    }  
};