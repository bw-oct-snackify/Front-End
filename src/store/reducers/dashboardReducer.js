import {
    DELETE_USER,
    BEGIN_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    BEGIN_UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    BEGIN_GET_USER_INFO,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
    BEGIN_LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from '../actions/dashboardActions';

const initState = {
    user: {
        name: '',
        user_id: null,
        company: '',
        company_id: null,
        admin: false,
        email: '',
        img_url:
            'https://www.catster.com/wp-content/uploads/2015/06/8698_choc_bosscat_full2.jpg',
        snacks: [],
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
            name: 'Mark Artishuk',
            suggestions: ['Reeses Cups', 'Hot Cheetos'],
        },
    ],

    order: [
        {
            id: 0,
            snack: 'Spicey Nuts',
            brand: 'Cummins',
            uom: '8 oz bag',
            quantity: 1,
        },
        {
            id: 1,
            snack: 'Poptart',
            brand: 'Kellogs',
            uom: '128 g',
            quantity: 1,
        },
        {
            id: 2,
            snack: 'Gummy Bears',
            brand: 'Haribo',
            uom: '64 oz bag',
            quantity: 1,
        },
        {
            id: 3,
            snack: 'Cheezits',
            brand: 'Kellogs',
            uom: '32 oz bag',
            quantity: 1,
        },
    ],

    isAuthenticating: false,
    loggedIn: false,
    authenticationError: '',

    isUpdating: false,
    updateError: '',
    updateSuccess: '',

    isGettingUserInfo: false,
    userInfoError: '',

    isLoggingOut: true,
    logoutError: '',
    logoutResponse: '',
};

export const dashboardReducer = (state = initState, action) => {
    console.log(`Action Type: ${action.type}`);
    console.log(`Action Payload: ${action.payload}`);
    switch (action.type) {
        //HANDLE LOGIN DATA
        case BEGIN_LOGIN:
            console.log('Attempting to login..');
            return {
                ...state,
                isAuthenticating: true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticating: false,
                loggedIn: true,
                user: {
                    ...state.user,
                    name: action.payload.name,
                    user_id: action.payload.user_ID,
                    email: action.payload.email,
                    company: action.payload.company_name,
                    company_id: action.payload.company_ID,
                    admin: action.payload.admin,
                    img_url: action.payload.img_url,
                },
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                authenticationError: action.payload,
                isAuthenticating: false,
            };

        //HANDLE UPDATE USER DATA
        case BEGIN_UPDATE_USER:
            return {
                ...state,
                isUpdating: true,
            };

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                updateSuccess:
                    'You have successfully updated your account information.',
                user: {
                    ...state.user,
                    name: action.payload.name,
                    user_id: action.payload.user_ID,
                    email: action.payload.email,
                    company: action.payload.company_name,
                    company_id: action.payload.company_ID,
                    admin: action.payload.admin,
                    img_url: action.payload.img_url,
                },
            };

        case UPDATE_USER_FAILURE:
            return {
                ...state,
                updateError: action.payload,
                isUpdating: false,
            };

        //HANDLE GET USER INFO
        case BEGIN_GET_USER_INFO:
            console.log('started fetching user data...');
            return {
                ...state,
                isGettingUserInfo: true,
            };

        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isGettingUserInfo: false,
                loggedIn: true,
                user: {
                    name: action.payload.name,
                    user_id: action.payload.user_ID,
                    email: action.payload.email,
                    company: action.payload.company_name,
                    company_id: action.payload.company_ID,
                    admin: action.payload.admin,
                    img_url: action.payload.img_url,
                },
            };

        case GET_USER_INFO_FAILURE:
            return {
                ...state,
                isGettingUserInfo: false,
                userInfoError: action.payload,
            };

        // HANDLE LOGOUT DATA
        case BEGIN_LOGOUT:
            return {
                ...state,
                isLoggingOut: true,
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: initState.user,
                isLoggingOut: false,
                loggedIn: false,
            };

        case LOGOUT_FAILURE:
            return {
                ...state,
                logoutError: action.payload,
            };

        case DELETE_USER:
            console.log(
                `Hey bro.. reducer here, working hard to delete the scum with the id ${action.payload}`
            );
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
            };

        default:
            return { ...state };
    }
};
