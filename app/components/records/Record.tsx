import React from 'react';
import { View, Text, StyleSheet } from 'react-native';




export const Record : React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.title}>pathing for 52min</Text>
                <Text style={styles.date}>29/02/2024</Text>
            </View>
        </View>
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