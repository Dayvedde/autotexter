const initialState = [
    {
        id: 'f4992e98-17f0-4e48-8a08-1e410cd3aaca',
        name: 'David Lai',
        phoneNumber: '1231231231',
        rules: [
            {
                type: 'location',
                coords: {
                    latitude: 43,
                    longitude: -79
                },
                radius: 1,
                text: 'Hello motto'
            }
        ]
    },
    {
        id: '6f57d3de-6d72-4afa-9a99-ca130584d205',
        name: 'Random person',
        phoneNumber: '6471230000',
        rules: []
    },
    {
        id: 'f8f6fd43-4cb4-4439-9854-16452de45951',
        name: 'Bobby Lee',
        phoneNumber: '6471230000',
        rules: []
    },
    {
        id: '8b3ad6e8-fa2c-4937-ae62-744246cb23ba',
        name: 'Michael Jackson',
        phoneNumber: '6471230000',
        rules: []
    }
];

function contacts(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                action.payload
            ];
        case 'DELETE_CONTACT':
            return state.filter((contact) => {
                return contact.id != action.payload
            });
        default:
            return state;
    }
}

export default contacts;