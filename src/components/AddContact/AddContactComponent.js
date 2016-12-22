import React, {Component} from 'react';
import {View} from 'react-native';
import mdStyles from '../../styles/material-design';
import {reduxForm, Field} from 'redux-form';
import {Button} from 'react-native-elements';
import TextInput from '../Form/TextInput/TextInputComponent';
import colors from '../../styles/colors';

class AddContactComponent extends Component {
    handleSubmit() {
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
                    props={{iconName: 'person'}}
                />
                <Field
                    name="phoneNumber"
                    component={TextInput}
                    placeholder="Phone Number"
                    props={{iconName: 'phone'}}
                />
                <View style={mdStyles.buttonContainer}>
                    <Button
                        raised
                        borderRadius={2}
                        onPress={() => this.handleSubmit()}
                        title='SAVE'
                        buttonStyle={mdStyles.button}
                        backgroundColor={colors.activeButton}
                    />
                </View>

            </View>
        )
    }
}

AddContactComponent = reduxForm({
    form: 'loginForm'
})(AddContactComponent);

export default AddContactComponent;