import React, {Component} from 'react';
import {View} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import {Button} from 'react-native-elements';
import uuid from 'react-native-uuid';

import TextInput from '../Form/TextInput/TextInputComponent';
import colors from '../../styles/colors';
import commonStyles from '../../styles/common';
import mdStyles from '../../styles/material-design';

class AddContactComponent extends Component {
    handleSubmit() {
        const contact = {
            id: uuid.v4(),
            name: this.props.name,
            phoneNumber: this.props.phoneNumber,
            rules: []
        };
        this.props.addContact(contact);
    }

    render() {
        return (
            <View style={commonStyles.sceneContainer}>
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