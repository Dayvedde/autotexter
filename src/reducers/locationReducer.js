const initialState = {
    lastPosition: null
}

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
