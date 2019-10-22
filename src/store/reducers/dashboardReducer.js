import {DELETE_USER} from '../actions/dashboardActions';

const initState = {

    user: {
        name: 'Snack Cat',
        role: 'admin',
        image: 'https://www.catster.com/wp-content/uploads/2015/06/8698_choc_bosscat_full2.jpg',
        company: 'Team Cat',
    },

    users: [
        {
            id: 0,
            email: 'fearthedeveloper@gmail.com',
            name: 'John Shoff',
            role: 'admin',
            suggestions: ['Taco Bites', 'Reeses Cups'],
        },
        {
            id: 1,
            email: 'luisocasio03@gmail.com',
            name: 'Luis Ocasio',
            role: 'user',
            suggestions: ['Gummy Bears', 'Watermelon Sour Patch Kids'],
        },
        {
            id: 2,
            email: 'easyas123l1@aol.com',
            name: 'Andrew Wilson',
            role: 'user',
            suggestions: ['Chips', 'Reeses Cups'],
        },
        {
            id: 3,
            email: 'markyshuk@gmail.com',
            name: "Mark Artishuk",
            role: 'user',
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

};

export const dashboardReducer = (state = initState, action) =>{
    console.log(`Action Type: ${action.type}, Action Payload: ${action.payload}`);
    switch(action.type){

        case DELETE_USER:
            console.log(`Hey bro.. reducer here, working hard to delete the scum with the id ${action.payload}`);
            return{...state, users: state.users.filter(user =>user.id !== action.payload)};


        default:
            return {...state};
    }
};