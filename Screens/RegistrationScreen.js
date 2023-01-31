import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity, 
  Pressable,
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
                        <Text style={styles.addAvatar}>
                            <AntDesign name="plus" size={20} color="#FF6C00" />
                            {/* <AntDesign name="close" size={20} color="#BDBDBD" style={styles.icon} /> */}
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
        borderRadius: "50%",
        borderWidth: 1,
        borderColor: '#FF6C00',
        textAlign: 'center',
    },
    // icon: {
    //     color: '#FF6C00',
    // },
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
        color: "#BDBDBD",
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
        height: 40,
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