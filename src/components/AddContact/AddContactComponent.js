import React, {Component} from 'react';
import {View} from 'react-native';
import mdStyles from '../../styles/material-design';
import {reduxForm, Field} from 'redux-form';
import {Button} from 'react-native-elements';
import TextInput from '../Form/TextInput/TextInputComponent';

class AddContactComponent extends Component {
    handleSubmit(){
        const contact = {
            name: this.props.name,
            phoneNumber: this.props.phoneNumber
        };
        this.props.addContact(contact);
    }

    render() {
        return (
            <View style={mdStyles.container}>
                <Field
                    name="name"
                    component={TextInput}
                    placeholder="Name"
                />
                <Field
                    name="phoneNumber"
                    component={TextInput}
                    placeholder="Phone Number"
                />
                <Button
                    large
                    raised
                    borderRadius={16}
                    iconRight
                    onPress={()=>this.handleSubmit()}
                    icon={{name: 'code'}}
                    title='SAVE'
                />

            </View>
        )
    }
}

AddContactComponent = reduxForm({
    form: 'loginForm'
})(AddContactComponent);

export default AddContactComponent;