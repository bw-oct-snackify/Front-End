import { UPDATE_SNACKS } from '../actions/companyActions';

const initState = {
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
};

export const companyReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_SNACKS:
            return {
                ...state,
                order: action.payload,
            };
            break;
        default:
            return state;
    }
};
