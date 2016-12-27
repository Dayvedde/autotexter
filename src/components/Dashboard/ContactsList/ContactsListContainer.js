import {connect} from 'react-redux';
import ContactsListComponent from './ContactsListComponent';

const mapStateToProp = (state) => ({
    contacts: state.contacts
});

const mapDispatchToProp = (dispatch) => ({
   deleteContact: (id) => dispatch({type: 'DELETE_CONTACT', payload: id})
});

export default connect(
    mapStateToProp,
    mapDispatchToProp
)(ContactsListComponent);
