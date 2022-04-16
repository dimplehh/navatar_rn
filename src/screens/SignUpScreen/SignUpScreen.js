import React, {useState} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();

    //const {height} = useWindowDimensions();

    const onRegisterPressed = () => {
        console.warn('가입 완료');
        navigation.navigate('SignInScreen');
    }

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    }

    const onSignUpPressed = () => {
        console.warn('onSignUpPressed');
    }

    return (
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>회원가입</Text>

            <CustomInput 
            placeholder="이메일" 
            value={email} 
            setValue={setEmail} 
            />
            <CustomInput 
            placeholder="비밀번호" 
            value={password} 
            setValue={setPassword}
            secureTextEntry
            />

            <CustomInput 
            placeholder="비밀번호 확인" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}
            secureTextEntry
            />

            <CustomButton 
            text="등록하기" 
            onPress={onRegisterPressed}
            
            />

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginTop: 80,
        
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2F3D40',
        margin: 10,
    }
});

export default SignUpScreen;