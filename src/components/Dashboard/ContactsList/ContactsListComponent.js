import React, {Component} from 'react';
import {View, ListView} from 'react-native';
import mdStyles from '../../../styles/material-design';
import ContactRowComponent from './ContactRowComponent';

class ContactsListComponent extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(this.props.contacts)
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("new props", nextProps);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.setState({
            dataSource: ds.cloneWithRows(nextProps.contacts)
        });
    }

    renderRow(data) {
        console.log("Data", data);
        return (
            <ContactRowComponent contact={data} />
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
            </View>
        )
    }
}

export default ContactsListComponent;