import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Button, Circle } from '../components';

export default function Home(){

    return (
       
            <View style={styles.container}>
                <Circle />
                <View style={{height: 100}} />
                <Button onClick={() => router.push('/pathing')} text='start' />
                <View style={{height: 20}} />
                <Text style={{opacity: .8, color: 'white', fontSize: 12, fontWeight: 'bold'}}>pathing for the next hour.</Text>
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
    txt: {
        opacity: .8, 
        color: 'white', 
        fontSize: 12, 
        fontWeight: 'bold'
    }
})