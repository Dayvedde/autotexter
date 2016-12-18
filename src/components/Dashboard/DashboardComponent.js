import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import styles from '../../styles/dashboard';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';

import SmsAndroid from 'react-native-sms-android';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
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
                        onPress={() => console.log("notes tapped!")}
                    >
                        <Icon name="md-person-add" style={styles2.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

const styles2 = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

export default Dashboard;