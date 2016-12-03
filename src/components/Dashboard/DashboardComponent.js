import React, {Component} from 'react';
import {Text, View} from 'react-native';
import dashboard from '../../styles/dashboard';

class Dashboard extends Component {
    render() {
        return (
            <View style={dashboard.container}>
                <Text style={dashboard.welcome}>
                    Welcome to AutoTexter
                </Text>
                <Text style={dashboard.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={dashboard.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

export default Dashboard;