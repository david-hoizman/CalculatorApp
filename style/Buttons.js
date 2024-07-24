import { StyleSheet } from 'react-native';

/**
 * Stylesheet for the container component in a React Native application.
 */
const styles = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly', // Items are evenly distributed
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 10,
        width: '100%', // Container width
        height: '100%', // Container height
    },
});

export default styles;
