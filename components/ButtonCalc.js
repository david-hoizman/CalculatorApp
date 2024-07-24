

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/ButtonClac'

export default function ButtonCalc({ value, calc, setCalc }) {

  const operators = ['+', '-', '/', '*', '%']

  const handleClick = () => {
    if (operators.includes(value.val) && operators.includes(calc.charAt(calc.length - 1))) {
      return
    }
    if (value.val === 'C') {
      setCalc('')
    } else if (value.val === '=') {
      setCalc(eval(calc)) // calculate the result
    } else if (value.val === '+/-') {
      const result = parseFloat(calc) * -1;
      setCalc(result.toString());
    } else {
      setCalc(calc + value.val)
    }
  }

  return (
    <TouchableOpacity
      style={value.type === "classic" ? styles.classsicButton : styles.specialButton}
      onPress={handleClick}
    >
      <Text style={styles.buttonText}>{value.val}</Text>
    </TouchableOpacity>
  );
};



// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React from 'react'
// import styles from '../style/ButtonClac'
// import math from 'mathjs' // ספריית eval חלופית

// export default function ButtonCalc({ value, calc, setCalc }) {

//   const operators = ['+', '-', '/', '*', '%']

//   const handleClick = () => {
//     if (operators.includes(value.val) && operators.includes(calc.charAt(calc.length - 1))) {
//       return
//     }
//     if (value.val === 'C') {
//       setCalc('')
//     } else if (value.val === '=') {
//       try {
//         setCalc(math.evaluate(calc)) // חישוב התוצאה באמצעות mathjs
//       } catch (error) {
//         console.error(error);
//         setCalc('Error'); // הצגת הודעת שגיאה
//       }
//     } else if (value.val === '+/-') {
//       const numbers = calc.split(/[+-\/*%]/);
//       const lastNumber = parseFloat(numbers[numbers.length - 1]);

//       if (lastNumber === 0) {
//         return;
//       }

//       const reversedNumber = lastNumber * -1;
//       const newCalc = numbers.slice(0, numbers.length - 1).join('') + reversedNumber.toString();

//       setCalc(newCalc);
//     } else {
//       setCalc(calc + value.val)
//     }
//   }

//   return (
//     <TouchableOpacity
//       style={value.type === "classic" ? styles.classsicButton : styles.specialButton}
//       onPress={handleClick}
//     >
//       <Text style={styles.buttonText}>{value.val}</Text>
//     </TouchableOpacity>
//   );
// };


 
