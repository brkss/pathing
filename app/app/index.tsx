import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function Home(){

    return (
       
            <View style={styles.container}>
               <View style={styles.circle} />
            </View>
       
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: -200,
        marginBottom: -200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        height: 180,
        width: 180,
        borderRadius: 200,
        backgroundColor: 'blue'
    }
})