import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';



export const Circle : React.FC = () => {


    const dimension = useSharedValue(140);
    const opacity = useSharedValue(0);

    React.useEffect(() => {

        dimension.value = withTiming(180, {duration: 400})
        opacity.value = withTiming(1, {duration: 700})

        return () => {}
    });

    const animationStyle = useAnimatedStyle(() => {
        return {
            width: dimension.value,
            height: dimension.value,
            opacity: opacity.value
        }
    })

    return (
        <View style={{height: 180, width: 180, justifyContent: 'center', alignItems: 'center'}}>
            <Animated.View style={[styles.circle, animationStyle]} />
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        //height: 180,
        //width: 180,
        borderRadius: 200,
        backgroundColor: 'blue'
    }
})