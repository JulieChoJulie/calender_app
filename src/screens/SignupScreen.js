import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';
import FooterButton from '../components/FooterButton';

const SignupScreen = () => {
    const [email, setEmail] = useState('이메일');
    const [pw, setPw] = useState('비밀번호');
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>KIDULER{"\n"}계정 만들기</Text>
            <TextInput
                style={styles.textInputButton}
                onChangeText={(email) => setEmail(email)}
                placeholder={email}
                autoCorrect={false}
            />
            <TextInput
                style={styles.textInputButton}
                onChangeText={(pw) => setPw(pw)}
                placeholder={pw}
                autoCorrect={false}
                secureTextEntory={true}
            />
            <Text style={styles.descriptionText}>회원가입 시 이용약관에 동의한 것으로 간주합니다.</Text>
            <FooterButton title='회원가입' style={styles.signupButton} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8D8D8',
    },
    titleText: {
        fontSize: 16,
        color: '#5B5A5A',
        marginTop: 41,
        textAlign: 'center',
        marginBottom: 115,
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
    descriptionText: {
        marginTop: 20,
        fontSize: 12,
        color: '#5b5a5a',
        fontWeight: '200',
    },
    signupButton: {
        marginTop: 97.5,
    }
})

export default SignupScreen;
