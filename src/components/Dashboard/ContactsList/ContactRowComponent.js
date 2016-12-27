import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../../../styles/contact-row';
import commonStyles from '../../../styles/common';
import {Icon} from 'react-native-elements';
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

class ContactRowComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.iconContainer, commonStyles.center]}>
                    <Icon name='face' size={42}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{this.props.contact.name}</Text>
                    <Text>Rules:</Text>
                </View>
                <View style={styles.menuContainer}>
                    <Menu>
                        <MenuTrigger>
                            <Icon name='more-vert' size={32}/>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption value={1} text="Edit Rules"/>
                            <MenuOption value={2} text="Delete"/>
                        </MenuOptions>
                    </Menu>
                </View>
            </View>
        )
    }
}

export default ContactRowComponent;