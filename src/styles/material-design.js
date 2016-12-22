import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({
    container: {
        marginTop: 56,
        padding: 16,
        flex: 1,
    },
    navBar: {
        height: 56,
        padding: 16,
        backgroundColor: colors.primary
    },
    textInput: {
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        flex: 1
    },
    textInputContainer: {
        height: 48,
        flexDirection: 'row',
    },
    iconContainer: {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 24,
        padding: 8,
        justifyContent: 'flex-end'
    },
    button: {
        height: 36,
    }
});
