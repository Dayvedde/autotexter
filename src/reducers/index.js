import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import contactsReducer from './contactsReducer';

const allReducers = combineReducers({
    form: formReducer,
    contacts: contactsReducer
});

export default allReducers;