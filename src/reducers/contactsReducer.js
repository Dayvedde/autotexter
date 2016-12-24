const initialState = {
    contacts: [
        {
            name: 'David Lai',
            phoneNumber: '6471230000'
        },
        {
            name: 'Random person',
            phoneNumber: '6471230000'
        },
        {
            name: 'Bobby Lee',
            phoneNumber: '6471230000'
        },
        {
            name: 'Michael Jackson',
            phoneNumber: '6471230000'
        },
        {
            name: 'Donald Trump',
            phoneNumber: '6471230000'
        },
        {
            name: 'Barak Obama',
            phoneNumber: '6471230000'
        },
        {
            name: 'Shalalala mama',
            phoneNumber: '6471230000'
        },
        {
            name: 'David Lai',
            phoneNumber: '6471230000'
        },
        {
            name: 'David Lai',
            phoneNumber: '6471230000'
        },
        {
            name: 'David Lai',
            phoneNumber: '6471230000'
        },
    ]
};

function contacts(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload
                ]
            };
        default:
            return state;
    }
}

export default contacts;