import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Circle, Button } from '../components'
import { router } from 'expo-router';


export default function Pathing () {

    return (
        <View style={styles.container}>
            <Circle />
            <View style={{height: 150}} />
            <Button onClick={() => router.replace('/')} text='stop' outline={true} />            
            <View style={{height: 30}} />
            <Text style={styles.txt}>pathing..</Text>
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