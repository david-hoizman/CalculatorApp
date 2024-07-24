import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from '../style/Screen';

/**
 * Screen component displays the calculation expression or result.
 * 
 * @param {string} calc - The current calculation expression or result to display.
 * @returns {JSX.Element} - Rendered screen component
 */
export default function Screen({ calc }) {
    return (
        <View style={styles.container}>
            {/* Display the calculation expression or result */}
            <Text style={styles.calc}>{calc}</Text>
        </View>
    );
}
