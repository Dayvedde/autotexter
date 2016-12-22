import {connect} from 'react-redux';
import ContactsListComponent from './ContactsListComponent';

const mapStateToProp = (state) => ({
    contacts: state.contacts.contacts
});

export default connect(
    mapStateToProp
)(ContactsListComponent);