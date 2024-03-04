import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';


interface Props {
    index: number;
    duration: number;
    date: string;
}

export const Record : React.FC<Props> = ({index}) => {
    
   

    return (
        <Animated.View entering={FadeInDown.duration(400).delay(200 + (100 * (index + 1)))} style={styles.container}>
            <View style={styles.circle} />
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.title}>pathing for 52min</Text>
                <Text style={styles.date}>29/02/2024</Text>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#212121',
        padding: 10,
        borderRadius: 15,
        marginBottom: 10
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5
    },
    date: {
        color: 'white',
        opacity: .8
    },
    circle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        borderRadius: 100,
        marginRight: 10
    }
})