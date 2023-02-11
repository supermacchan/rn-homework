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
                    {/* Form container */}
                    <View style={{
                        ...styles.form,
                        paddingBottom: isKeyboardShown ? 0 : 45,
                        marginBottom: isKeyboardShown ? -120 : 0,
                    }}>
                        {/* Image container */}
                        <View style={styles.imgContainer}>
                            {/* <Image /> */}
                            <Pressable style={styles.addImgBtn}>
                                <AntDesign name="camera" size={24} color="#BDBDBD" />
                            </Pressable>
                        </View>
                        <Pressable>
                            <Text style={styles.addImage}>Загрузите фото</Text>
                        </Pressable>
                        {/* <Pressable>
                            <Text style={styles.addImage}>Редактировать фото</Text>
                        </Pressable> */}
                        <TextInput
                            placeholder="Название..."
                            placeholderTextColor={'#BDBDBD'}
                            style={styles.postTitle}
                        />
                        <TextInput
                            placeholder="Местность..."
                            placeholderTextColor={'#BDBDBD'}
                            style={styles.postLocation}
                        />
                        {/* <AntDesign name="enviromento" size={24} color="black" /> */}
                        {/* Кнопка публикации */}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.button}
                        >
                            <Text style={styles.btnTitle}>Опубликовать</Text>
                        </TouchableOpacity>
                        {/* Toolbar */}
                        <Pressable style={styles.deleteBtn}>
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
        paddingTop: 32,
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    addImgBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addImage: {
        color: '#BDBDBD',
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        paddingTop: 6,
    },
    postTitle: {
        marginTop: 32,
        paddingVertical: 15,
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: '#000',
    },
    postLocation: {
        marginTop: 16,
        paddingVertical: 15,
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginTop: 32,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitle: {
        color: '#fff',
        fontSize: 16,
        fontFamily: "Roboto-Regular",
    },
    deleteBtn: {
        backgroundColor: '#F6F6F6',
        width: 70,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 120,
    }
})