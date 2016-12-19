import {connect} from 'react-redux';
import AddContactComponent from './AddContactComponent';
import {formValueSelector} from 'redux-form';

const selector = formValueSelector('loginForm');

const mapStateToProps = state => ({
    name: selector(state, 'name'),
    phoneNumber: selector(state, 'phoneNumber')
});

const mapDispatchToProps = dispatch => ({
    addContact: contact => {
        dispatch({type: 'ADD_CONTACT', payload: contact})
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddContactComponent);