import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, TextInput} from 'react-native';
import mdStyles from '../../styles/material-design';
import {reduxForm, Field} from 'redux-form';

class AddContactComponent extends Component {
    render() {
        return (
            <View style={mdStyles.container}>
                <Field
                    name="email"
                    component={TextInput}
                    placeholder="Email"
                />
            </View>
        )
    }
}

AddContactComponent = reduxForm({
    form: 'loginForm'
})(AddContactComponent);


export default AddContactComponent;