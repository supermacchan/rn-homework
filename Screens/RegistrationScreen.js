import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity, 
  Pressable,
} from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
    const [avatar, setAvatar] = useState(null);
    // const [inputName, setInputName] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginFocused, setIsLoginFocused] = useState(true);
    const [isEmailFocused, setIsEmailFocused] = useState(true);
    const [isPassFocused, setIsPassFocused] = useState(true);


    // useEffect(() => {
    //     setIsFocused(true);
    // }, [login, email, password])

    const handleSetLogin = text => setLogin(text);
    const handleSetEmail = text => setEmail(text);
    const handleSetPassword = text => setPassword(text);

    const handleInputFocus = (event) => {
        let input = event.currentTarget.placeholder;
        switch (input) {
            case 'Логин': 
                setIsEmailFocused(true);
                setIsPassFocused(true);
                setIsLoginFocused(false);
                console.log(isLoginFocused);
                break;
            case 'Адрес электронной почты':
                setIsLoginFocused(true);
                setIsPassFocused(true);
                setIsEmailFocused(false);
                break;
            case 'Пароль':
                setIsLoginFocused(true);
                setIsEmailFocused(true);
                setIsPassFocused(false);
                break;
        }
    };

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
                        style={isLoginFocused
                            ? { ...styles.input }
                            : { ...styles.inputFocused }}
                        placeholder='Логин'
                        placeholderTextColor='#BDBDBD'
                        onFocus={handleInputFocus}
                        value={login}
                        onChangeText={text => handleSetLogin(text)}
                    />
                    {/* инпут для емейла */}
                    <TextInput
                        style={isEmailFocused
                            ? { ...styles.input }
                            : { ...styles.inputFocused }}
                        placeholder='Адрес электронной почты'
                        placeholderTextColor='#BDBDBD'
                        onFocus={handleInputFocus}
                        value={email}
                        onChangeText={text => handleSetEmail(text)}
                    />
                    {/* инпут для пароля */}
                    <TextInput
                        style={isPassFocused
                            ? { ...styles.input }
                            : { ...styles.inputFocused }}
                        placeholder='Пароль'
                        secureTextEntry={true}
                        placeholderTextColor='#BDBDBD'
                        onFocus={handleInputFocus}
                        value={password}
                        onChangeText={text => handleSetPassword(text)}
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