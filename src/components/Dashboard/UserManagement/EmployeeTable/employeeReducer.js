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
};


export const employeeReducer = (state = initState, action) =>{
    switch(action.type){
        default:
            return {...state};
    }
};