const initState = {

    employees: [
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
    switch(action.type){
        default:
            return {...state};
    }
};