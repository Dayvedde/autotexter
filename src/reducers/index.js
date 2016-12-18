import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
    addContactFormReducer: formReducer
});

export default allReducers;