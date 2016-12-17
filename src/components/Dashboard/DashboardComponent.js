import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import dashboard from '../../styles/dashboard';
import SmsAndroid from 'react-native-sms-android';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <View>
                <Text>

                </Text>
            </View>
        );
    }
}

export default Dashboard;