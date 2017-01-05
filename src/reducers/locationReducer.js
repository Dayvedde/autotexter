const initialState = {
    lastPosition: {
        latitude: 43,
        longitude: -79
    }
};

function location(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_LOCATION':
            return {
                lastPosition: action.payload
            };
        default:
            return state;
    }
}

export default location;
