import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Record } from './Record'
import { LinearGradient } from 'expo-linear-gradient';


export const Records : React.FC = () => {


    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Last Records</Text>
            <View>
                <Record />
                <Record />
                <Record />
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