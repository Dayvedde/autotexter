import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import {Icon} from 'react-native-elements';
import SmsAndroid from 'react-native-sms-android';

import ContactsListContainer from './ContactsList/ContactsListContainer';
import styles from '../../styles/dashboard';
import mdStyles from '../../styles/material-design';
import colors from '../../styles/colors';


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={mdStyles.container}>
                <View>
                    <ContactsListContainer />
                </View>
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