import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Circle, Button } from '../components'
import { router } from 'expo-router';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, FadeInUp, FadeOutDown, FadeInDown } from 'react-native-reanimated';

export default function Pathing () {

   

   

    return (
        <View style={styles.container}>
            <Circle />
            <View style={{height: 150}} />
            <Animated.View entering={FadeInDown.duration(400)} exiting={FadeOutDown}>
                <Button onClick={() =>  router.dismiss()} text='stop' outline={true} /> 
            </Animated.View>
            <View style={{height: 30}} />
            <Animated.Text entering={FadeInDown.delay(200).duration(400)} exiting={FadeOutDown} style={[styles.txt]}>pathing..</Animated.Text>
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
    },
    circle: {
        //height: 180,
        //width: 180,
        borderRadius: 200,
        backgroundColor: 'blue',
    }
})