// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Calculator from './components/Calculator';
// import Container from './components/Container';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Container/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




import { StatusBar } from 'expo-status-bar'; // Importing StatusBar component from Expo
import { StyleSheet, Text, View } from 'react-native'; // Importing necessary components from React Native
import Calculator from './components/Calculator'; // Importing Calculator component from local file
import Container from './components/Container'; // Importing Container component from local file

/**
 * App component represents the main entry point of the application.
 * It renders a View component with a style defined in the styles constant.
 * Inside the View, it renders the Container component.
 * 
 
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Container/>
    </View>
  );
}

// StyleSheet.create is used to define styles for components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Flex 1 makes the container take up the entire screen
    backgroundColor: '#fff', // Background color set to white
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
});
