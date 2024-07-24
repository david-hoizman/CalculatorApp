import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly', // מיושבים באופן שווה
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 10,
        width: '100%', // אורך הקונטיינר
        height: '100%', // גובה הקונטיינר
    },
})
export default styles;
