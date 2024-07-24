
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import React from 'react';
// import styles from '../style/ButtonClac'; // Ensure correct style import path


// /**
//  * ButtonCalc component represents a button in a calculator application.
//  * It handles button clicks and updates the calculator display accordingly.
//  */
// const ButtonCalc = ({ value, calc, setCalc }) => {
//   const operators = ['+', '-', '/', '*', '%'];

//   /**
//    * Handles button click event based on the value of the button.
//    * Updates the calculator display (calc state) accordingly.
//    */
//   const handleClick = () => {
  
//     // Check if the button value is an operator and if the last character in calc is also an operator

//     if (operators.includes(value.val) && operators.includes(calc.charAt(calc.length - 1))) {
//       return; // Prevent consecutive operators
//     }
//     // Handle Clear (C) button
//     if (value.val === 'C') {
//       setCalc('');
//       // Handle Negate (+/-) button
//     } else if (value.val === '=') {
//       setCalc(eval(calc).toString()); // calculate the result
//     // Handle Negate (+/-) button
//     } else if (value.val === '+/-') {
//       const result = parseFloat(calc) * -1;
//       setCalc(result.toString());
//     // Handle Percentage (%) button
//     } else if (value.val === '%') {
//     // Ensure there is something in calc to operate on
//       if (calc.length === 0) {
//         return; // Cannot perform operation on empty string
//       }

//     // Find the last number in the calculation string
//       const lastIndex = calc.lastIndexOf(' ');
//       const lastNumber = calc.slice(lastIndex + 1);
//       // Check if the last number is a valid number
//       if (isNaN(parseFloat(lastNumber))) {
//         return; // The last number in the calculation is not valid
//       }

//       // Calculate the percentage of the last number and update the calculation string
//       const percentage = parseFloat(lastNumber) / 100;
//       const newCalculation = calc.slice(0, lastIndex + 1) + percentage;
//       setCalc(newCalculation);
//       // Handle other buttons (numbers and basic operators)
//     } else {
//       setCalc(calc + value.val); // Append the button value to the current calculation string
//     }
//   };

//   return (
//     <TouchableOpacity
//       style={value.type === 'classic' ? styles.classsicButton : styles.specialButton}
//       onPress={handleClick}
//     >
//       <Text style={styles.buttonText}>{value.val}</Text>
//     </TouchableOpacity>
//   );
// };

// export default ButtonCalc;








import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../style/ButtonClac'; 

/**
 * ButtonCalc component represents a button in a calculator application.
 * It handles button clicks and updates the calculator display accordingly.
 */

const ButtonCalc = ({ value, calc, setCalc }) => {
  // Array of operators used to determine operator types
  const operators = ['+', '-', '/', '*', '%'];

/**
   * Handles button click event based on the value of the button.
   * Updates the calculator display (calc state) accordingly.
   */

  const handleClick = () => {
    // Handle Clear (C) button
    if (value.val === 'C') {
      setCalc(''); // Clear the calculator display
    } else if (value.val === '=') {
      // Evaluate the calculation string and convert result to string for display
      setCalc(eval(calc).toString());
    } else if (value.val === '+/-') {
      // Find the index of the last operator in the calculation string
      let lastOperatorIndex = -1;
      for (let i = calc.length - 1; i >= 0; i--) {
        if (operators.includes(calc[i])) {
          lastOperatorIndex = i;
          break;
        }
      }

      // If no operator found, negate the entire expression
      if (lastOperatorIndex === -1) {
        const negatedResult = (-1) * parseFloat(calc);
        setCalc(negatedResult.toString());
      } else {
        // Replace the last operator with '-' if it's '+', or vice versa
        const lastOperator = calc[lastOperatorIndex];
        const newOperator = lastOperator === '+' ? '-' : '+';
        const newCalculation = calc.slice(0, lastOperatorIndex) + newOperator + calc.slice(lastOperatorIndex + 1);
        setCalc(newCalculation);
      }
    } else if (value.val === '%') {
      // Ensure there is something in the calculation string to operate on
      if (calc.length === 0) {
        return; // Cannot perform operation on empty string
      }

      // Find the index of the last space in the calculation string
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
    } else {
      // Append the button value to the current calculation string
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


 