import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity, 
    Pressable,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';
import { useState } from 'react';
import { AntDesign } from "@expo/vector-icons";

export const CommentsScreen = () => {
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [comment, setComment] = useState('');

    const hideKeyboard = () => {
        setIsKeyboardShown(false);
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={hideKeyboard}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == 'ios' ? 'padding' : ''}
                >
                    {/* Comments section container */}
                    <View style={{
                            ...styles.section,
                            paddingBottom: isKeyboardShown ? 0 : 45,
                            marginBottom: isKeyboardShown ? -120 : 0,
                    }}>
                        {/* Image container */}
                        <View style={styles.imgContainer}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/test-post.jpg')}
                                objectFit='cover'
                            />
                        </View>
                        {/* Comments section */}
                        <FlatList>
                            {/* Тут будут рендериться комменты */}
                        </FlatList>
                        {/* New comment input */}
                        <TextInput
                            style={{
                                ...styles.input,
                                backgroundColor: isFocused ? '#fff' : '#E8E8E8',
                                borderColor: isFocused ? '#FF6C00' : 'transparent'
                            }}
                                placeholder='Комментировать...'
                                placeholderTextColor='#BDBDBD'
                                onFocus={() => {
                                    setIsFocused(true);
                                    setIsKeyboardShown(true);
                                }}
                                onBlur={() => { setIsFocused(false) }}
                                onChangeText={text => setComment(text)}
                                value={comment}
                        />
                        {/* Кнопка регистрации */}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.button}
                            // onPress={handleFormSubmit}
                        >
                            <AntDesign name="arrowup" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    section: {
        paddingTop: 32,
        paddingBottom: 45,
        paddingHorizontal: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
    },
    imgContainer: {
        marginTop: 32,
        marginBottom: 32,
        height: 240,
        backgroundColor: '#E8E8E8',
        borderRadius: 8
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    input: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#E8E8E8',
        height: 50,
        borderRadius: 100,
        color: "#212121",
        borderWidth: 1,
        borderColor: 'transparent',
        fontSize: 16,
        fontFamily: "Roboto-Regular",
    },
    button: {
        backgroundColor: '#FF6C00',
        width: 34,
        height: 34,
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
})