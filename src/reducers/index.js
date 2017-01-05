import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import contactsReducer from './contactsReducer';
import locationReducer from './locationReducer';

const allReducers = combineReducers({
    form: formReducer,
    contacts: contactsReducer,
    location: locationReducer
});

export default allReducers;