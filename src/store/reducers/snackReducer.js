import {
    UPDATE_SNACKS,
    UPDATE_SUGGESTIONS,
    GET_ALL_SNACKS,
    ADD_SNACK_TO_SUGGESTIONS,
} from '../actions/snackActions';

const initState = {
    order: [],
    suggestions: [],
    snacks: [],
};

export const snackReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_SNACKS:
            return {
                ...state,
                order: action.payload,
            };
        case UPDATE_SUGGESTIONS:
            return {
                ...state,
                suggestions: action.payload,
            };
        case GET_ALL_SNACKS:
            return {
                ...state,
                snacks: action.payload,
            };
        case ADD_SNACK_TO_SUGGESTIONS:
            return {
                ...state,
                suggestions: state.suggestions.push(action.payload),
            };
        default:
            return state;
    }
};
