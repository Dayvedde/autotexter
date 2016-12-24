import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../../../styles/contact-row';
import commonStyles from '../../../styles/common';
import {Icon} from 'react-native-elements';

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
                    <Icon name='more-vert' size={32}/>
                </View>
            </View>
        )
    }
}

export default ContactRowComponent;