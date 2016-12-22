import React, {Component} from 'react';
import {View, Text} from 'react-native';
import mdStyles from '../../../styles/material-design';


class ContactRowComponent extends Component {
    render() {
        console.log("In rows", this.props);
        return (
            <View>
                <Text>{this.props.contact.name}</Text>
            </View>
        )
    }
}

export default ContactRowComponent;