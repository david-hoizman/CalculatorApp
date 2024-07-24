import { StyleSheet } from 'react-native';

/**
 * Stylesheet for a container component in a React Native application.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1, // Takes up the entire available space
        flexDirection: 'column', // Arranges children vertically
        justifyContent: 'center', // Centers children vertically
        alignItems: 'center', // Centers children horizontally
        backgroundColor: 'rgb(0, 0, 200)', // Dark blue background color
        padding: 20, // Adds 20 units of padding around the container
        width: 400, // Fixed width of 400 units
        height: '100%' // Takes up 100% of the parent container's height
    },
});

export default styles;
