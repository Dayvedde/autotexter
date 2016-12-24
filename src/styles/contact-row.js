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
    menuContainer: {
        height: rowHeight,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameText: {
        fontSize: 16
    }
});
