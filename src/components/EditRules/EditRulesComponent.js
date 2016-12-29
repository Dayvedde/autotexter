import React, {Component} from 'react';
import {View, Text} from 'react-native';

import RulesListComponent from './RulesList/RulesListComponent';
import commonStyles from '../../styles/common';

class EditRulesComponent extends Component {
    render() {
        return (
            <View style={commonStyles.sceneContainer}>
                <RulesListComponent contact={this.props.contact}/>
            </View>
        );
    }
}

export default EditRulesComponent;