import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/ButtonClac'
export default function ButtonCalc({ value, calc, setCalc }) {

  const operators = ['+','-','/','*','%']

  const handleClick = () => {
    if (operators.includes(value.val) && operators.includes(calc.charAt(calc.length - 1)))
      return
    if (value.val == 'C')  
      setCalc('')
    else if (value.val == '=')
      setCalc(eval(calc))//calculate the result
    else
      setCalc(calc + value.val)
  }

  return (
    <TouchableOpacity
      style={value.type == "classic" ? styles.classsicButton : styles.specialButton}
      onPress={handleClick}
    >
      <Text style={styles.buttonText}>{value.val}</Text>
    </TouchableOpacity>
  );
};

