import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtonCalc from './ButtonCalc'
import Buttons from './Buttons'
import Screen from './Screen'
import styles from '../style/Calculator'

export default function Calculator() {
    const [calc, setCalc] = useState('');

    return (
        <View style={styles.container}>
            <Screen calc = {calc}/>
            <Buttons calc = {calc} setCalc={setCalc} />
        </View>
    )
}

