import {DELETE_USER, BEGIN_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, BEGIN_UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE} from '../actions/dashboardActions';

const initState = {

    user: {
        name: '',
        user_id: 0,
        company: '',
        company_id: 0,
        admin: false,
        email: '',
        image: 'https://www.catster.com/wp-content/uploads/2015/06/8698_choc_bosscat_full2.jpg',
    },

    users: [
        {
            id: 0,
            email: 'fearthedeveloper@gmail.com',
            name: 'John Shoff',
            suggestions: ['Taco Bites', 'Reeses Cups'],
        },
        {
            id: 1,
            email: 'luisocasio03@gmail.com',
            name: 'Luis Ocasio',
            suggestions: ['Gummy Bears', 'Watermelon Sour Patch Kids'],
        },
        {
            id: 2,
            email: 'easyas123l1@aol.com',
            name: 'Andrew Wilson',
            suggestions: ['Chips', 'Reeses Cups'],
        },
        {
            id: 3,
            email: 'markyshuk@gmail.com',
            name: "Mark Artishuk",
            suggestions: ["Reeses Cups", "Hot Cheetos"],
        },
    ], 

    order: [
        {
            id: 0,
            snack: "Spicey Nuts",
            brand: "Cummins",
            uom: "8 oz bag",
            quantity: 1
        },
        {
            id: 1,
            snack: "Poptart",
            brand: "Kellogs",
            uom: "128 g",
            quantity: 1
        },
        {
            id: 2,
            snack: "Gummy Bears",
            brand: "Haribo",
            uom: "64 oz bag",
            quantity: 1
        },
        {
            id: 3,
            snack: "Cheezits",
            brand: "Kellogs",
            uom: "32 oz bag",
            quantity: 1
        },
    ], 

    isAuthenticating: false,
    loggedIn: false,
    authenticationError: '',

};

export const dashboardReducer = (state = initState, action) =>{
    console.log(`Action Type: ${action.type}, Action Payload: ${action.payload}`);
    switch(action.type){

        case BEGIN_LOGIN:
            console.log('Attempting to login..');
            return{
                ...state,
                isAuthenticating: true,
            };

        case LOGIN_SUCCESS:
            console.log('LOGIN SUCCESS: ', action.payload);
            return {
              ...state,
              isAuthenticating: false,
              loggedIn: true,
              user: {...state.user, name: action.payload.name, user_id: action.payload.user_ID,  email: action.payload.email, company: action.payload.company_name, company_ID: action.payload.company_id, admin: action.payload.admin, image: action.payload.image || state.user.image}
            };

        case LOGIN_FAILURE:
            console.log("LOGIN FAILURE:", action.payload);
            return {
                ...state,
                authenticationError: action.payload,
                isAuthenticating: false,
            };


        case DELETE_USER:
            console.log(`Hey bro.. reducer here, working hard to delete the scum with the id ${action.payload}`);
        return{...state, users: state.users.filter(user =>user.id !== action.payload)};

        default:
            return {...state};
    }
};