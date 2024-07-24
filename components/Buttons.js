import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonCalc from './ButtonCalc';
import styles from '../style/Buttons'

export default function Buttons({ calc, setCalc }) {
    const buttons = [];
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
    ]
    values.forEach(value => {
        buttons.push(
            <ButtonCalc
                value={value}
                calc={calc}
                setCalc={setCalc}
            />
        );
    }
    )
    return (
        <View style={styles.container}>
            {buttons}
        </View>
    )
}

