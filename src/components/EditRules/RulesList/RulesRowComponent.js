import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {rulesRow} from '../../../styles/rules';

class RulesRowComponent extends Component {
    render() {
        return (
            <View style={rulesRow.container}>
                <Text>hello</Text>
            </View>
        )
    }
}

export default RulesRowComponent;
