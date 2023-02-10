import {
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    View,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 

export const CreatePostsScreen = () => {
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);

    const hideKeyboard = () => {
        setIsKeyboardShown(false);
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={hideKeyboard}>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : ''} >
                    {/* Main form container */}
                    <View style={{
                        ...styles.form,
                        paddingBottom: isKeyboardShown ? 0 : 45,
                        marginBottom: isKeyboardShown ? -120 : 0,
                    }}>
                        {/* Image container */}
                        <View style={styles.imgContainer}>
                            {/* <Image /> */}
                            <Pressable>
                                <AntDesign name="camera" size={24} color="#BDBDBD" />
                            </Pressable>
                        </View>
                        <Text>Загрузите фото</Text>
                        <TextInput placeholder="Название..." />
                        <TextInput placeholder="Местность..." />
                        {/* Кнопка публикации */}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.button}
                        >
                            <Text style={styles.btnTitle}>Опубликовать</Text>
                        </TouchableOpacity>
                        <Pressable>
                            <AntDesign name="delete" size={24} color="#BDBDBD" />
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    form: {
        paddingTop: 32,
        paddingBottom: 45,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    imgContainer: {
        backgroundColor: '#F6F6F6',
        height: 240,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
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
        fontFamily: "Roboto-Regular",
    },
})