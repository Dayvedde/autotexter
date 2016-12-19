import React, {Component} from 'react';
import {TextInput} from 'react-native';

class TextInputComponent extends Component {
    render() {
        const {input: {value, onChange}} = this.props;
        return (
            <TextInput
                onChangeText={(value) => onChange(value)}
                value={value}
                {...this.props}
            />
        );
    }
}

export default TextInputComponent;