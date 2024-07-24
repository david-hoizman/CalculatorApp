import { StyleSheet, View } from 'react-native'
import React from 'react'
import Calculator from './Calculator'
import styles from '../style/Container'

export default function Container() {
    return (
        <View style={styles.container}>
            <Calculator/>
        </View>
    )
}

