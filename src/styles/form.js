import {StyleSheet} from 'react-native';

const dropdownRowHeight = 48;

export const menuContainer = {
    menuOptions: {
        optionsContainer: {
            paddingTop: 8,
            paddingBottom: 8,
            width: 112,
        },
        optionWrapper: {
            width: 112,
            height: dropdownRowHeight,
            paddingLeft: 16,
            paddingRight: 16,
            justifyContent: 'center',
        },
        optionText: {
            fontSize: 16
        }
    },
    menuTrigger: {
        triggerWrapper: {
            height: dropdownRowHeight,
            width: 160,
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderBottomWidth: 1,
        }
    }
};

export const dropdown = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: dropdownRowHeight,
        paddingLeft: 16,
        paddingRight: 16,
    },
    labelContainer: {
        height: dropdownRowHeight,
        width: 48,
        justifyContent: 'center',
    }
});