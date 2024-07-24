import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../style/ButtonClac';

const ButtonCalc = ({ value, calc, setCalc }) => {
  const operators = ['+', '-', '/', '*', '%'];

  const handleClick = () => {
    if (operators.includes(value.val) && operators.includes(calc.charAt(calc.length - 1))) {
      return;
    }
    if (value.val === 'C') {
      setCalc('');
    } else if (value.val === '=') {
      setCalc(eval(calc).toString()); // calculate the result
    } else if (value.val === '+/-') {
      const result = parseFloat(calc) * -1;
      setCalc(result.toString());
    } else if (value.val === '%') {
      if (calc.length === 0) {
        return; // לא ניתן לבצע פעולה על מחרוזת ריקה
      }

      const lastIndex = calc.lastIndexOf(' ');
      const lastNumber = calc.slice(lastIndex + 1);

      if (isNaN(parseFloat(lastNumber))) {
        return; // המספר האחרון בחישוב אינו חוקי
      }

      const percentage = parseFloat(lastNumber) / 100;
      const newCalculation = calc.slice(0, lastIndex + 1) + percentage;
      setCalc(newCalculation);
    } else {
      setCalc(calc + value.val);
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












 