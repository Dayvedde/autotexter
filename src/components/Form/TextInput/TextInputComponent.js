import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import mdStyles from '../../../styles/material-design';
import {Icon} from 'react-native-elements';

class TextInputComponent extends Component {
    render() {
        return (
            <View style={mdStyles.textInputContainer}>
                <View style={mdStyles.iconContainer}>
                    <Icon
                        name={this.props.iconName}
                        size={24}
                    />
                </View>
                <View style={mdStyles.textInput}>
                    <TextInput
                        onChangeText={(value) => this.props.input.onChange(value)}
                        value={this.props.input.value}
                        {...this.props}
                    />
                </View>
            </View>
        );
    }
}

export default TextInputComponent;