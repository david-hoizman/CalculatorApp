import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/Screen'


export default function Screen({calc}) {
    return (
        <View style={styles.container}>
            <Text style={styles.calc}>{calc}</Text>
        </View>
    );
};

