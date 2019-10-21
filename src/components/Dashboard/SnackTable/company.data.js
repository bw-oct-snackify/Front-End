const snackifyInfastructure = {
    availableSnacks: [
        {
            id:0,
            name: 'Spicy Almonds',
            description: 'Not your average snack, these almonds are going to help boost your metabolism.',
        },
        {
            id:1,
            name: 'Super Pringles',
            description: 'Super Awesome Pringles',
        },
        {
            id:3,
            name: 'Cheetos Puffs',
            description: 'Cheetos, that are puffed up!',
        },
        {
            id:4,
            name: 'Oreo Cookies',
            description: 'Multi-flavored oreo cookies randomly selected!',
        },
        {
            id:5,
            name: 'Canned Tuna',
            description: 'Fresh water canned tuna!',
        },
        {
            id:6,
            name: 'Hershey Chocolate Bar',
            description: 'That sweet hershey flavor your love is a convenient package.',
        },
        {
            id:7,
            name: 'Peanut Butter Crackers',
            description: 'Delicious peanut butter crackers, that just hit the spot.',
        }
    ],

    availableBundles:[
        {
            name: 'Small Teams',
            description: '1 - 10 Employees',
            price: '$199.00 / mo',
        },
        {
            name: 'Medium Teams',
            description: '1 - 50 Employees',
            price: '$399.00 / mo',
        },
        {
            name: 'Large Teams',
            description: '1 - 100 Employees',
            price: '$599.00 / mo',
        },
        {
            name: 'Mega Teams',
            description: '> 100 Employees',
            price: 'Contact Us',
        },
    ],

    companies: [
        {
            companyName: 'Snackify',
            companyPhone: '(111)222-0001',
            companyCity: 'City Name',
            companyState: 'State Name',
            companyAddress: '123 Happy Go Luck Ln.',

            companyBundle: 'Small Team',

            employees: [
                {
                    id: 0,
                    role: 'admin',
                    name: 'John Shoff',
                    email: 'fearthedeveloper@gmail.com',
                    suggestions: [
                        {
                            name: 'Bombites',
                            description: 'A super tasty snack that just explodes in your mouth.',
                        }
                    ],
                },
                {
                    id: 1,
                    role: 'member',
                    name: 'Luis Ocasio',
                    email: 'luisocasio03@gmail.com',
                    suggestions: [
                        {
                            name: 'Slim Jims',
                            description: 'A crunchy savory snack that gives you the protein to get through your work day.',
                        }
                    ],
                },
            ],

        },
    ],
}