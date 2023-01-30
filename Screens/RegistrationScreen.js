import {
  StyleSheet,
  View,
  ImageBackground,
  Button,
  Text,
  TextInput,
  TouchableOpacity, 
  Pressable,
  Platform
} from 'react-native';
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
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
                    <Pressable style={styles.avatarBtn} >
                        <Text>
                            <AntDesign name="close" size={24} color="#BDBDBD" />
                        </Text>
                    </Pressable>
                    <Text style={styles.title}>Регистрация</Text>
                    {/* инпут для логина */}
                    <TextInput style={styles.input} placeholder='Логин' />
                    {/* инпут для емейла */}
                    <TextInput style={styles.input} placeholder='Адрес электронной почты' />
                    {/* инпут для пароля */}
                    <TextInput style={styles.input} placeholder='Пароль' secureTextEntry={true} />
                    {/* Кнопка показать / скрыть пароль */}
                    <Pressable style={styles.showPass} >
                        <Text>Показать</Text>
                    </Pressable>
                    {/* Кнопка регистрации */}
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                        <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    {/* ссылка перехода на страницу логина */}
                    <Pressable style={styles.loginNav} >
                        <Text>Уже есть аккаунт? Войти</Text>
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
        position: 'relative',
        marginTop: -92,
        marginBottom: 32,
        alignSelf: 'center',
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    avatarBtn: {
        // временное позиционирование
        position: 'absolute',
        left: '65%',
        width: 25,
        height: 25,
        borderRadius: "50%",

    },
    title: {
        marginBottom: 33,
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
        color: "#BDBDBD",
        fontSize: 16,
    },
    button: {
        // ...Platform.select({
        // ios: {
        //     backgroundColor: '#ffa500',
        //     borderColor: '#fffafa',
        // },
        // android: {
        //     backgroundColor: '#ffa500',
        //     borderColor: 'transparent',
        //     },
        // default: {
        //     backgroundColor: '#ffa500',
        //     borderColor: 'transparent',
        // }
        // }),
        backgroundColor: '#FF6C00',
        height: 40,
        borderRadius: 100,
        marginTop: 27,
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
    }
})