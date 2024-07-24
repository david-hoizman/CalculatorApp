import { StyleSheet } from 'react-native';

/**
 * Stylesheet for button components in a calculator application.
 */

const styles = StyleSheet.create({
    classsicButton: {
      backgroundColor: 'purple',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 50,
      width: 75,
      height: 75,
      marginBottom: 20,
      marginLeft: 0
    },
    specialButton: {
      backgroundColor: 'red',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 50,
      width: 150,
      height: 75,
      marginBottom: 20,
      marginLeft: 0
    },
    buttonText: {
      color: 'white',
      fontSize: 26,
      textAlign: 'center',
    },
  })
  export default styles;
