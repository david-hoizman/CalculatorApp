import { StyleSheet, View } from 'react-native';
import React from 'react';
import Calculator from './Calculator';
import styles from '../style/Container';

/**
 * Container component wraps the Calculator component.
 * It applies styling and provides structure to the calculator interface.
 * 
 * @returns {JSX.Element} - Rendered container component
 */
export default function Container() {
    return (
        <View style={styles.container}>
            {/* Calculator component renders the main calculator interface */}
            <Calculator />
        </View>
    );
}
