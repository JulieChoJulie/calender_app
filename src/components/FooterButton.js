import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

const FooterButton = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Image source={require('./button.png')}  style={styles.image}/>
            <Text style={styles.buttonText}>{ title }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 315,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        position: 'absolute',
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    }
});

export default FooterButton;
