import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

import styles, {menuContainer} from '../../../styles/contact-row';
import commonStyles from '../../../styles/common';

class ContactRowComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.iconContainer, commonStyles.center]}>
                    <Icon name='face' size={42}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{this.props.contact.name}</Text>
                    <Text>{`${this.props.contact.rules.length} rule(s)`}</Text>
                </View>
                <Menu>
                    <MenuTrigger customStyles={menuContainer.menuTrigger}>
                        <Icon name='more-vert' size={32}/>
                    </MenuTrigger>
                    <MenuOptions customStyles={menuContainer.menuOptions}>
                        <MenuOption
                            value={1}
                            text="Edit Rules"
                            onSelect={() => Actions.editRules({
                                contact: this.props.contact
                            })}
                        />
                        <MenuOption
                            value={2}
                            text="Delete"
                            onSelect={() => this.props.deleteContact(this.props.contact.id)}
                        />
                    </MenuOptions>
                </Menu>
            </View>
        )
    }
}

export default ContactRowComponent;