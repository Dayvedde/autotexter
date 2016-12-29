import {StyleSheet} from 'react-native';

const rowHeight = 72;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: rowHeight,
    },
    iconContainer: {
        height: rowHeight,
        width: 72,
    },
    textContainer: {
        height: rowHeight,
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1
    },
    menuTriggerContainer: {
        height: rowHeight,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameText: {
        fontSize: 16
    },
    buttonContainer: {
        height: 48,
        marginTop: 24,
    }
});

export const rulesRow = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: rowHeight,
    },
    iconContainer: {
        height: rowHeight,
        width: 72,
    },
    textContainer: {
        height: rowHeight,
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1
    },
    menuTriggerContainer: {
        height: rowHeight,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameText: {
        fontSize: 16
    },
    buttonContainer: {
        height: 48,
        marginTop: 24,
    }
});

export const menuContainer = {
    menuOptions: {
        optionsContainer: {
            marginTop: 16,
            marginLeft: -16,
            paddingTop: 8,
            paddingBottom: 8,
            width: 112,
        },
        optionWrapper: {
            width: 112,
            height: 48,
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
            height: rowHeight,
            width: 56,
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
};
