import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ButtonCalc from './ButtonCalc';
import styles from '../style/Buttons';

/**
 * Buttons component renders a set of calculator buttons based on the `values` array.
 * Each button is represented by the `ButtonCalc` component.
 * 
 * @param {object} props - Component props
 * @param {string} props.calc - Current calculation string
 * @param {function} props.setCalc - Function to update the calculation string
 * @returns {JSX.Element} - Rendered component of buttons
 */
export default function Buttons({ calc, setCalc }) {
    // Array to hold JSX elements for buttons
    const buttons = [];

    // Array of button values with their types
    const values = [
        { val: 'C', type: "classic" },
        { val: '+/-', type: "classic" },
        { val: '%', type: "classic" },
        { val: '/', type: "classic" },
        { val: 7, type: "classic" },
        { val: 8, type: "classic" },
        { val: 9, type: "classic" },
        { val: '*', type: "classic" },
        { val: 4, type: "classic" },
        { val: 5, type: "classic" },
        { val: 6, type: "classic" },
        { val: '-', type: "classic" },
        { val: 1, type: "classic" },
        { val: 2, type: "classic" },
        { val: 3, type: "classic" },
        { val: '+', type: "classic" },
        { val: 0, type: "classic" },
        { val: '.', type: "classic" },
        { val: '=', type: "special" },
    ];

    // Populate the buttons array with ButtonCalc components
    values.forEach(value => {
        buttons.push(
            <ButtonCalc
                key={value.val}
                value={value}
                calc={calc}
                setCalc={setCalc}
            />
        );
    });

    // Render the buttons wrapped in a styled container
    return (
        <View style={styles.container}>
            {buttons}
        </View>
    );
}
