import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ButtonCalc from './ButtonCalc';
import Buttons from './Buttons';
import Screen from './Screen';
import styles from '../style/Calculator';

/**
 * Calculator component represents the main calculator interface.
 * It integrates the Screen, Buttons, and ButtonCalc components.
 * 
 * @returns {JSX.Element} - Rendered calculator component
 */
export default function Calculator() {
    // State to hold the current calculation string
    const [calc, setCalc] = useState('');

    return (
        <View style={styles.container}>
            {/* Screen component to display the current calculation */}
            <Screen calc={calc} />

            {/* Buttons component to render calculator buttons */}
            <Buttons calc={calc} setCalc={setCalc} />
        </View>
    );
}

