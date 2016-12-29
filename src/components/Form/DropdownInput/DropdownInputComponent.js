import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import {dropdown, menuContainer} from '../../../styles/form';
import {Icon} from 'react-native-elements';


class DropdownInputComponent extends Component {
    render() {
        return (
            <View style={dropdown.container}>
                <View style={dropdown.labelContainer}>
                    <Text>
                        Type:
                    </Text>
                </View>
                <Menu>
                    <MenuTrigger
                        customStyles={menuContainer.menuTrigger}
                        text={this.props.input.value || "Select one..."}
                    >
                        <Icon name='more-vert' size={32}/>
                    </MenuTrigger>
                    <MenuOptions customStyles={menuContainer.menuOptions}>
                        <MenuOption
                            value={1}
                            text="Location"
                            onSelect={() => this.props.input.onChange('Location')}
                        />
                        <MenuOption
                            value={2}
                            text="Time"
                            onSelect={() => this.props.input.onChange('Time')}
                        />
                    </MenuOptions>
                </Menu>
            </View>
        );
    }
}

export default DropdownInputComponent;