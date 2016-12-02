import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class SplashScreenComponent extends Component {
    componentDidMount() {
        setTimeout(() => {
            Actions.dashboard();
        }, 2000)
    }

    render() {
        return (
            <View style={{justifyContent: 'center', flex: 1, flexDirection: 'column'}}>
                <Text style={{fontSize: 24, alignSelf: 'center'}}>
                    AUTO TEXTER SPLASH SCREEN
                </Text>
                <Text style={{fontSize: 18, alignSelf: 'center'}}>
                    This screen will change in 2 seconds
                </Text>
            </View>
        )
    }
}

export default SplashScreenComponent;