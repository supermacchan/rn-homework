import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity, 
  Pressable,
} from 'react-native';
import { useState } from 'react';
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
    const [avatar, setAvatar] = useState(null);
    const [loginIsFocused, setLoginIsFocused] = useState(false);
    const [emailIsFocused, setEmailIsFocused] = useState(false);
    const [passIsFocused, setPassIsFocused] = useState(false);

    const handleInputFocus = (event) => {
        let name = event.currentTarget.placeholder;
        switch (name) {
            case 'Логин':
                setLoginIsFocused(true);
                setEmailIsFocused(false);
                setPassIsFocused(false);
                console.log('login in focus');
                break;
            case 'Адрес электронной почты':
                setLoginIsFocused(false);
                setEmailIsFocused(true);
                setPassIsFocused(false);
                console.log('email in focus');
                break;
            case 'Пароль':
                setLoginIsFocused(false);
                setEmailIsFocused(false);
                setPassIsFocused(true);
                console.log('pass in focus');
                break;
            default: 
                setLoginIsFocused(false);
                setEmailIsFocused(false);
                setPassIsFocused(false);
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require("../assets/background.jpg")}
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
                        style={loginIsFocused
                            ? { ...styles.input }
                            : { ...styles.inputFocused }}
                        placeholder='Логин'
                        placeholderTextColor='#BDBDBD'
                        onFocus={handleInputFocus}
                    />
                    {/* инпут для емейла */}
                    <TextInput
                        style={emailIsFocused
                            ? { ...styles.input }
                            : { ...styles.inputFocused }}
                        placeholder='Адрес электронной почты'
                        placeholderTextColor='#BDBDBD'
                        onFocus={handleInputFocus}
                    />
                    {/* инпут для пароля */}
                    <TextInput
                        style={passIsFocused
                            ? { ...styles.input }
                            : { ...styles.inputFocused }}
                        placeholder='Пароль'
                        secureTextEntry={true}
                        placeholderTextColor='#BDBDBD'
                        onFocus={handleInputFocus}
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
    inputFocused: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#E8E8E8',
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF6C00',
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
    loginNav: {
        textAlign: 'center',
    },
    loginNavText: {
        color: '#1B4371',
        fontSize: 16,
    }
})