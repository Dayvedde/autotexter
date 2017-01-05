import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {reduxForm, Field} from 'redux-form';

import commonStyles from '../../styles/common';
import TextInput from '../Form/TextInput/TextInputComponent';
import DropdownInputComponent from '../Form/DropdownInput/DropdownInputComponent';
import MapContainer from './Map/MapContainer';

class AddRuleComponent extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <View style={commonStyles.sceneContainer}>
                <Field
                    name="description"
                    component={TextInput}
                    placeholder="Rule Description..."
                    props={{iconName: 'description'}}
                />
                <Field
                    name="type"
                    component={DropdownInputComponent}
                    placeholder="Rule Description..."
                    props={{iconName: 'description'}}
                />

                <MapContainer />

            </View>
        );
    }
}

export default reduxForm({
    form: 'loginForm'
})(AddRuleComponent);

