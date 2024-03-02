import React from 'react';
import { StyleSheet, View } from 'react-native';



export const Circle : React.FC = () => {


    return (
        <View style={styles.circle} />
    )
}

const styles = StyleSheet.create({
    circle: {
        height: 180,
        width: 180,
        borderRadius: 200,
        backgroundColor: 'blue'
    }
})