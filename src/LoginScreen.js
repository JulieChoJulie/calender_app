import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import FooterButton from './components/FooterButton';

const LoginScreen = () => {
    const [idText, setIdText] = useState('이메일');
    const [pwText, setPwText] = useState('비밀번호');

    return (
        <View style={styles.container}>
            <Image
                source={require('./logo.png')}
                style={styles.icon}
            />
            <Text style={styles.welcome}>환영합니다</Text>
            <TextInput
                style={styles.textInputButton}
                onChangeText={(id) => setIdText(id)}
                placeholder={idText}
                autoCorrect={false}
            />
            <TextInput
                style={styles.textInputButton}
                onChangeText={(id) => setPwText(id)}
                placeholder={pwText}
                autoCorrect={false}
                secureTextEntory={true}
            />
            <FooterButton
                title="로그인"
                style={styles.loginButton}
                onPress={() => {}}
            />
            <Text style={styles.noAccount}>계정이 없으신가요?</Text>
            <TouchableOpacity>
                <Text style={styles.createAccount}>계정 만들기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8D8D8'
    },
    icon: {
        width: 130,
        height: 130,
        marginBottom: 30,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 23,
    },
    textInputButton: {
        width: 288,
        borderColor: 'gray',
        paddingVertical: 10,
        borderWidth: 0.3,
        paddingHorizontal: 5,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 50,
    },
    loginButton: {
        marginTop: 50,
    },
    noAccount: {
        marginTop: 30,
        fontSize: 12,
        color: '#5B5A5A',
    },
    createAccount: {
        fontSize: 12,
        color: '#9013FE',
    }
})

export default LoginScreen;
