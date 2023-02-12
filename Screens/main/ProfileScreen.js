import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';
import { useState } from 'react';
import { AntDesign } from "@expo/vector-icons";

export const ProfileScreen = () => {
    const [avatar, setAvatar] = useState(null);
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);

    const hideKeyboard = () => {
        setIsKeyboardShown(false);
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={hideKeyboard}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={require("../../assets/background.jpg")}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS == 'ios' ? 'padding' : ''}
                    >
                        {/* Profile Container */}
                        <View style={{
                            ...styles.profile,
                            paddingBottom: isKeyboardShown ? 0 : 45,
                            marginBottom: isKeyboardShown ? -120 : 0,
                        }}>
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
                            <Text style={styles.title}>Name Shalala</Text>
                            <FlatList>
                                {/* Тут будут рендериться посты */}
                            </FlatList>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
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
    profile: {
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    delAvatar: {
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginBottom: 33,
        marginTop: 46,
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
        fontFamily: "Roboto-Medium",
    },
})