import {combineReducers} from 'redux';
import UsersReducer from './usersReducer';

const allReducers = combineReducers({
    users: UsersReducer
});

export default allReducers;