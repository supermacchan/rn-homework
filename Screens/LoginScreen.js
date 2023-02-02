import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity, 
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState } from 'react';

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPassFocused, setIsPassFocused] = useState(false);
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);

    const handleSetEmail = text => setEmail(text);
    const handleSetPassword = text => setPassword(text);

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require("../assets/background.jpg")}
            >
                {/* Контейнер формы регистрации */}
                <View style={styles.form}>
                    <Text style={styles.title}>Войти</Text>
                    {/* инпут для емейла */}
                   <TextInput
                        style={{
                            ...styles.input,
                            backgroundColor: isEmailFocused ? '#fff' : '#E8E8E8',
                            borderColor: isEmailFocused ? '#FF6C00' : 'transparent'
                        }}
                        placeholder='Адрес электронной почты'
                        placeholderTextColor='#BDBDBD'
                        onFocus={() => { setIsEmailFocused(true) }}
                        onBlur={() => { setIsEmailFocused(false) }}
                        onChangeText={text => handleSetEmail(text)}
                        value={email}
                    />
                    {/* инпут для пароля */}
                    <TextInput
                        style={{
                            ...styles.input,
                            backgroundColor: isPassFocused ? '#fff' : '#E8E8E8',
                            borderColor: isPassFocused ? '#FF6C00' : 'transparent'
                        }}
                        placeholder='Пароль'
                        secureTextEntry={true}
                        placeholderTextColor='#BDBDBD'
                        onFocus={() => { setIsPassFocused(true) }}
                        onBlur={() => { setIsPassFocused(false) }}
                        onChangeText={text => handleSetPassword(text)}
                        value={password}
                    />
                    {/* Кнопка показать / скрыть пароль */}
                    <Pressable style={styles.showPass} >
                        <Text style={styles.showPassText}>Показать</Text>
                    </Pressable>
                    {/* Кнопка регистрации */}
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                        <Text style={styles.btnTitle}>Войти</Text>
                    </TouchableOpacity>
                    {/* ссылка перехода на страницу логина */}
                    <Pressable style={styles.authNav} >
                        <Text style={styles.authNavText}>Нет аккаунта? Зарегистрироваться</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'flex-end',
    },
    form: {
        paddingTop: 32,
        paddingBottom: 111,
        paddingHorizontal: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
    },
    title: {
        marginBottom: 32,
        marginTop: 0,
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
    },
    input: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#E8E8E8',
        height: 50,
        borderRadius: 8,
        color: "#212121",
        fontSize: 16,
    },
    showPass: {
        alignSelf: 'flex-end',
        marginTop: -50,
        marginRight: 16,
    },
    showPassText: {
        fontSize: 16,
        color: '#1B4371',
    },
    button: {
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginTop: 59,
        marginBottom: 16,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitle: {
        color: '#fff',
        fontSize: 16,
    },
    authNav: {
        textAlign: 'center',
    },
    authNavText: {
        color: '#1B4371',
        fontSize: 16,
        alignSelf: 'center'
    }
})