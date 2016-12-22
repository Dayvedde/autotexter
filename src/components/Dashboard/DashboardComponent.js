import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import styles from '../../styles/dashboard';
import mdStyles from '../../styles/material-design';
import ActionButton from 'react-native-action-button';
import {Icon} from 'react-native-elements';
import colors from '../../styles/colors';
import {Actions} from 'react-native-router-flux';

import SmsAndroid from 'react-native-sms-android';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={mdStyles.container}>
                <Text>
                    Dashboard
                </Text>
                <ActionButton
                    offsetX={16}
                    offsetY={0}
                    spacing={8}
                    buttonColor={colors.actionButtonRgba}
                >
                    <ActionButton.Item
                        buttonColor={colors.actionButtonItem}
                        title="Add Contact"
                        onPress={() => Actions.addContact()}
                    >
                        <Icon name="person-add" color={colors.white} size={24}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

export default Dashboard;