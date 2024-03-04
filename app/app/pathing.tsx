import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Circle, Button } from '../components'
import { router } from 'expo-router';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, FadeInUp, FadeOutDown, FadeInDown } from 'react-native-reanimated';

export default function Pathing () {

    const circleAnimation = {
        dimension: useSharedValue(150),
        opacity: useSharedValue(.1)
    }

    const elementsAnimation = {
        opacity: useSharedValue(.2),
        y: useSharedValue(10),
    }

    React.useEffect(() => {
       
        circleAnimation.dimension.value = withTiming(180, {duration: 400})
        circleAnimation.opacity.value = withTiming(1, {duration: 700})

        elementsAnimation.y.value = withTiming(0, {duration: 600})
        elementsAnimation.opacity.value = withTiming(1, {duration: 600})
        return () => {}
    })

    const stopPathing = () => {
        execAnimations();
    }

    const execAnimations = () => {
        router.dismiss();
        /*
        circleAnimation.dimension.value = withTiming(150, {duration: 400});
        circleAnimation.opacity.value = withTiming(0, {duration: 700,}); 
        elementsAnimation.opacity.value = withTiming(0, {duration: 500}, (done) => {
            console.log("done : ", done);
            
        });
        */
    }


    // style
    const circleAnimatedStyle = useAnimatedStyle(() => {
        return {
            height: circleAnimation.dimension.value,
            width: circleAnimation.dimension.value,
            opacity: circleAnimation.opacity.value
        }
    });

    const stylesAnimated =  useAnimatedStyle(() => ({
        //translateY: elementsAnimation.opacity.value,
        opacity:  elementsAnimation.opacity.value,
    }))

    return (
        <View style={styles.container}>
            <Circle />
            <View style={{height: 150}} />
            <Animated.View entering={FadeInDown.duration(400)} exiting={FadeOutDown}>
                <Button onClick={() => stopPathing()} text='stop' outline={true} /> 
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
        opacity: .8, 
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