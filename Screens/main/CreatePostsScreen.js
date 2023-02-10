import {
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    View,
    KeyboardAvoidingView,
    Platform,
    Pressable
} from "react-native";
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
                    {/* Main container */}
                    <View style={{
                        paddingBottom: isKeyboardShown ? 0 : 45,
                        marginBottom: isKeyboardShown ? -120 : 0,
                    }}>
                        {/* Image container */}
                        <View>
                            {/* <Image /> */}
                            <Pressable>
                                <AntDesign name="camera" size={24} color="#BDBDBD" />
                            </Pressable>
                        </View>
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
})