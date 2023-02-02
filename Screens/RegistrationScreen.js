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
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
    const [avatar, setAvatar] = useState(null);
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginFocused, setIsLoginFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPassFocused, setIsPassFocused] = useState(false);
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);

    const handleSetLogin = text => setLogin(text);
    const handleSetEmail = text => setEmail(text);
    const handleSetPassword = text => setPassword(text);

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require("../assets/background.jpg")}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS == 'ios' ? 'padding' : ''}
                >
                    {/* Контейнер формы регистрации */}
                    <View style={styles.form}>
                        {/* Контейнер для аватарки */}
                        <View style={styles.avatar}>
                            {/* <Image /> */}
                        </View>
                        {/* Кнопка добавить / удалить аватарку */}
                        {!avatar ? (
                            <Pressable style={styles.avatarBtn} >
                                <Text style={styles.addAvatar}>
                                    <AntDesign name="plus" size={20} color="#FF6C00" />
                                </Text>
                            </Pressable>
                        ) : (
                            <Pressable style={styles.avatarBtn} >
                                <Text style={styles.delAvatar}>
                                    <AntDesign name="close" size={20} color="#BDBDBD" />
                                </Text>
                            </Pressable>
                        )}
                        <Text style={styles.title}>Регистрация</Text>
                        {/* инпут для логина */}
                        <TextInput
                            style={{
                                ...styles.input,
                                backgroundColor: isLoginFocused ? '#fff' : '#E8E8E8',
                                borderColor: isLoginFocused ? '#FF6C00' : 'transparent'
                            }}
                            placeholder='Логин'
                            placeholderTextColor='#BDBDBD'
                            onFocus={() => { setIsLoginFocused(true) }}
                            onBlur={() => { setIsLoginFocused(false) }}
                            onChangeText={text => handleSetLogin(text)}
                            value={login}
                        />
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
                            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                        </TouchableOpacity>
                        {/* ссылка перехода на страницу логина */}
                        <Pressable style={styles.loginNav} >
                            <Text style={styles.loginNavText}>Уже есть аккаунт? Войти</Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
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
        paddingBottom: 45,
        paddingHorizontal: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
    },
    avatar: {
        marginTop: -92,
        alignSelf: 'center',
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    avatarBtn: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginTop: -39,
        marginRight: -119.5,
    },
    addAvatar: {
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#FF6C00',
        textAlign: 'center',
    },
    delAvatar: {
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        textAlign: 'center',
    },
    title: {
        marginBottom: 33,
        marginTop: 46,
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
        borderWidth: 1,
        borderColor: 'transparent',
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
    loginNav: {
        textAlign: 'center',
    },
    loginNavText: {
        color: '#1B4371',
        fontSize: 16,
        textAlign: 'center',
    }
})