import React, {useState} from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        //console.warn('로그인 성공');
        navigation.navigate('HomeScreen');
    };

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    };

    const onSignUpPressed = () => {
        console.warn('onSignUpPressed');
        navigation.navigate('SignUpScreen');
    };



    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.root}>
            <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode="contain" 
            />
            <CustomInput 
            placeholder="이메일 아이디" 
            value={username} 
            setValue={setUsername} 
            />
            <CustomInput 
            placeholder="비밀번호" 
            value={password} 
            setValue={setPassword}
            secureTextEntry
            />
            <CustomButton 
            text="로그인" 
            onPress={onSignInPressed}
            />
            <CustomButton 
                text="아이디/비밀번호 찾기" 
                onPress={onForgotPasswordPressed} 
                type="TERTIARY"
            />

            <CustomButton 
                text="회원가입" 
                onPress={onSignUpPressed} 
                type="TERTIARY"
            />
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF', 
    },
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF', 
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen;