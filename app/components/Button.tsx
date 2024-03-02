import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


interface Props {
    outline?: boolean;
    text: string;
    onClick: () => void;
}


export const Button : React.FC<Props> = ({outline, text, onClick}) => {


    return (
        <TouchableOpacity onPress={onClick} style={[styles.container, {backgroundColor: outline ? "tranparent" : "white"}]}>
            <Text style={[styles.text, {color: outline ? "white" : "black"}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'white',
        paddingVertical: 13,
        paddingHorizontal: 70,
        borderRadius: 14,
        borderColor: 'white',
        borderWidth: 3,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})