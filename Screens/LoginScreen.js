import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity, 
  Pressable,
} from 'react-native';

export const LoginScreen = () => {
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
                        style={styles.input}
                        selectionColor='#FF6C00'
                        placeholder='Адрес электронной почты'
                        placeholderTextColor='#BDBDBD'
                    />
                    {/* инпут для пароля */}
                    <TextInput
                        style={styles.input}
                        selectionColor='#FF6C00'
                        placeholder='Пароль'
                        secureTextEntry={true}
                        placeholderTextColor='#BDBDBD'
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
    authNav: {
        textAlign: 'center',
    },
    authNavText: {
        color: '#1B4371',
        fontSize: 16,
    }
})