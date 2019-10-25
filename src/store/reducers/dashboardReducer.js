import {
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
  BEGIN_GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  BEGIN_DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from "../actions/dashboardActions";

const initState = {
  user: {
    name: "",
    user_id: null,
    company: "",
    company_id: null,
    admin: false,
    email: "",
    img_url:
      "https://www.catster.com/wp-content/uploads/2015/06/8698_choc_bosscat_full2.jpg",
    snacks: []
  },

  users: [
    {
      id: 0,
      email: "fearthedeveloper@gmail.com",
      name: "John Shoff",
      suggestions: ["Taco Bites", "Reeses Cups"]
    },
    {
      id: 1,
      email: "luisocasio03@gmail.com",
      name: "Luis Ocasio",
      suggestions: ["Gummy Bears", "Watermelon Sour Patch Kids"]
    },
    {
      id: 2,
      email: "easyas123l1@aol.com",
      name: "Andrew Wilson",
      suggestions: ["Chips", "Reeses Cups"]
    },
    {
      id: 3,
      email: "markyshuk@gmail.com",
      name: "Mark Artishuk",
      suggestions: ["Reeses Cups", "Hot Cheetos"]
    }
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
    }
  ],
  
  isAuthenticating: false,
  loggedIn: false,
  authenticationError: "",

  isUpdating: false,
  updateError: "",
  updateSuccess: "",

  isGettingUserInfo: false,
  userInfoError: "",

  isLoggingOut: true,
  logoutError: "",
  logoutResponse: "",

  isGettingUsers: false,
  gettingUsersError: "",

  isDeletingUser: false,
  deletingUserError: ''
};

export const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    //HANDLE LOGIN DATA
    case BEGIN_LOGIN:
      return {
        ...state,
        isAuthenticating: true
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
          img_url: action.payload.img_url
        }
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        authenticationError: action.payload,
        isAuthenticating: false
      };

    //HANDLE UPDATE USER DATA
    case BEGIN_UPDATE_USER:
      return {
        ...state,
        isUpdating: true
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        updateSuccess:
          "You have successfully updated your account information.",
        user: {
          ...state.user,
          name: action.payload.name,
          user_id: action.payload.user_ID,
          email: action.payload.email,
          company: action.payload.company_name,
          company_id: action.payload.company_ID,
          admin: action.payload.admin,
          img_url: action.payload.img_url
        }
      };

    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updateError: action.payload,
        isUpdating: false
      };

    //HANDLE GET USER INFO
    case BEGIN_GET_USER_INFO:
      return {
        ...state,
        isGettingUserInfo: true
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
          img_url: action.payload.img_url
        }
      };

    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        isGettingUserInfo: false,
        userInfoError: action.payload
      };

    // HANDLE LOGOUT DATA
    case BEGIN_LOGOUT:
      return {
        ...state,
        isLoggingOut: true
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: initState.user,
        isLoggingOut: false,
        loggedIn: false
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: action.payload
      };

    case BEGIN_GET_USERS:
      return {
        ...state,
        isGettingUsers: true
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        isGettingUsers: false,
        users: [...action.payload.users]
      };

    case GET_USERS_FAILURE:
      return {
        ...state,
        isGettingUsers: false,
        getUsersError:action.payload,
      };

    case BEGIN_DELETE_USER:
        return{
            ...state,
            isDeletingUser: true,
        };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isDeletingUser: false,
        users: state.users.filter(user => user.id !== action.payload)
      };

    case DELETE_USER_FAILURE:
        return{
            ...state,
            isDeletingUser: false,
            deletingUserError: action.payload,
        }

    default:
      return { ...state };
  }
};