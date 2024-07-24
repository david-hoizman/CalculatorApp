
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../style/ButtonClac'; // Ensure correct style import path


/**
 * ButtonCalc component represents a button in a calculator application.
 * It handles button clicks and updates the calculator display accordingly.
 */
const ButtonCalc = ({ value, calc, setCalc }) => {
  const operators = ['+', '-', '/', '*', '%'];

  /**
   * Handles button click event based on the value of the button.
   * Updates the calculator display (calc state) accordingly.
   */
  const handleClick = () => {
  
    // Check if the button value is an operator and if the last character in calc is also an operator

    if (operators.includes(value.val) && operators.includes(calc.charAt(calc.length - 1))) {
      return; // Prevent consecutive operators
    }
    // Handle Clear (C) button
    if (value.val === 'C') {
      setCalc('');
      // Handle Negate (+/-) button
    } else if (value.val === '=') {
      setCalc(eval(calc).toString()); // calculate the result
    // Handle Negate (+/-) button
    } else if (value.val === '+/-') {
      const result = parseFloat(calc) * -1;
      setCalc(result.toString());
    // Handle Percentage (%) button
    } else if (value.val === '%') {
    // Ensure there is something in calc to operate on
      if (calc.length === 0) {
        return; // Cannot perform operation on empty string
      }

    // Find the last number in the calculation string
      const lastIndex = calc.lastIndexOf(' ');
      const lastNumber = calc.slice(lastIndex + 1);
      // Check if the last number is a valid number
      if (isNaN(parseFloat(lastNumber))) {
        return; // The last number in the calculation is not valid
      }

      // Calculate the percentage of the last number and update the calculation string
      const percentage = parseFloat(lastNumber) / 100;
      const newCalculation = calc.slice(0, lastIndex + 1) + percentage;
      setCalc(newCalculation);
      // Handle other buttons (numbers and basic operators)
    } else {
      setCalc(calc + value.val); // Append the button value to the current calculation string
    }
  };

  return (
    <TouchableOpacity
      style={value.type === 'classic' ? styles.classsicButton : styles.specialButton}
      onPress={handleClick}
    >
      <Text style={styles.buttonText}>{value.val}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCalc;










 