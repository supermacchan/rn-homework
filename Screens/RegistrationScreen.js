import {
  StyleSheet,
  View,
  ImageBackground,
  Button,
  Text,
  TextInput,
  TouchableOpacity, 
  Platform
} from 'react-native';

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
                    <View>
                        {/* <Image /> */}
                    </View>
                    {/* Кнопка добавить / удалить аватарку */}
                    <Button title='x' />
                    <Text style={styles.title}>Регистрация</Text>
                    {/* инпут для логина */}
                    <TextInput style={styles.input} />
                    {/* инпут для емейла */}
                    <TextInput style={styles.input} />
                    {/* инпут для пароля */}
                    <TextInput style={styles.input} secureTextEntry={true} />
                    {/* Кнопка показать / скрыть пароль */}
                    <Button title='Показать' />
                    {/* Кнопка регистрации */}
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                        <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    {/* ссылка перехода на страницу логина */}
                    <Button title='Уже есть аккаунт? Войти' />
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
        justifyContent: 'center',
    },
    form: {
        marginHorizontal: 40,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        color: '#000',
    },
    input: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#f0f8ff',
        backgroundColor: '#ffe4e1',
        height: 40,
        borderRadius: 6,
        color: "#000",
        fontSize: 18,
    },
    button: {
        ...Platform.select({
        ios: {
            backgroundColor: '#ffa500',
            borderColor: '#fffafa',
        },
        android: {
            backgroundColor: '#ffa500',
            borderColor: 'transparent',
            },
        default: {
            backgroundColor: '#ffa500',
            borderColor: 'transparent',
        }
        }),
        height: 40,
        borderRadius: 6,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitle: {
        color: '#191970',
        fontSize: 15,
    },
})