import React, {Component} from 'react';
import {View, ListView, Text} from 'react-native';
import RulesRowComponent from './RulesRowComponent';
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

import mdStyles from '../../../styles/material-design';
import styles from '../../../styles/rules';
import colors from '../../../styles/colors'

class RulesListComponent extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(this.props.contact.rules)
        };
    }

    componentWillMount() {
        Actions.refresh({
            title: this.props.contact.name
        })
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRows(nextProps.contacts)
        // });
    }

    renderRow(data) {
        return (
            <RulesRowComponent
            />
        );
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                    enableEmptySections={true}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="ADD RULE"
                        raised
                        borderRadius={2}
                        buttonStyle={mdStyles.button}
                        backgroundColor={colors.activeButton}
                        fontWeight="500"
                    />
                </View>
            </View>
        )
    }
}

export default RulesListComponent;
