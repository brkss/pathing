import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Record } from './Record'
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {  FadeInDown } from 'react-native-reanimated';

interface IRecord {
    duration: number;
    date: string;
}

const records : IRecord[] = [
    {
        duration: 50,
        date: "22/2/2023"
    },
    {
        duration: 23,
        date: "21/2/2023"
    },
    {
        duration: 32,
        date: "20/2/2023"
    },
]


export const Records : React.FC = () => {


    return (
        <View style={styles.container}>
            
            <Animated.Text  entering={FadeInDown.duration(400)} style={styles.title}>Last Records</Animated.Text>
            <View>
                {
                    records.map((r, key) => (
                        <Record key={key} index={key} duration={r.duration} date={r.date} />
                    ))
                }
            </View>
            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', 'black']}
                style={{height: 100, width: '100%', marginTop: -100}}
            >
                
            </LinearGradient>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 10
    }
})