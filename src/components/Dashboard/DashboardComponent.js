import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import s from '../../styles/dashboard';
import SmsAndroid from 'react-native-sms-android';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={s.container}>
            </View>
        );
    }
}

export default Dashboard;