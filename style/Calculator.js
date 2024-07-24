import { StyleSheet } from 'react-native';

/**
 * Stylesheet for the container component in a React Native application.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1, // Takes up the entire available space
        flexDirection: 'column', // Arranges children vertically
        justifyContent: 'center', // Centers children vertically
        alignItems: 'center', // Centers children horizontally
        backgroundColor: 'rgb(0, 0, 20)', // Dark blue background color
        width: 350, // Fixed width of 350 units
        height: '60%', // 60% of the parent container's height
        paddingTop: 20 // Adds 20 units of padding at the top
    },
});

export default styles;
