import React, {Component} from 'react';
import {View, ListView} from 'react-native';
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
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.contacts)
        });
    }

    renderRow(data) {
        return (
            <ContactRowComponent
                contact={data}
                deleteContact={(id) => this.props.deleteContact(id)}
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
            </View>
        )
    }
}

export default ContactsListComponent;
