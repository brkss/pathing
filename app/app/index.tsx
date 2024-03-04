import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Button, Circle, Records } from '../components';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Home(){


    React.useEffect(() => {
        console.log("entred home");
    })


    return (
       
            <View  style={styles.container}>
                <Circle />
                <View style={{height: 100}} />
                <Records />
                <Animated.View entering={FadeInDown.duration(500).delay(200)}>
                    <Button onClick={() => router.push('/pathing')} text='start' />
                </Animated.View>
                <View style={{height: 20}} />
                <Animated.Text entering={FadeInDown.duration(500).delay(300)} style={{ color: 'white', fontSize: 12, fontWeight: 'bold'}}>pathing for the next hour.</Animated.Text>
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
        //opacity: .8, 
        color: 'white', 
        fontSize: 12, 
        fontWeight: 'bold'
    }
})