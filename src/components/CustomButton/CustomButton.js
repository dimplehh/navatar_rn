import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
    return (
        <Pressable 
        onPress={onPress} 
        style={[styles.container, styles['container_${type}']]}>
            <Text style={[styles.text, styles['text_${type}']]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#A6A6A6',
    },

    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: '#2F3D40',
    },

    test_TERTIARY: {
        color: 'black',
    },
});

export default CustomButton;