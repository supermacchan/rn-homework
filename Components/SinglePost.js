import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export const SinglePost = () => {
    return (
        <View style={styles.post}>
            {/* Image container */}
            <View style={styles.imgContainer}>
                <Image />
            </View>
            <Text>Название</Text>
            <Pressable>
                <EvilIcons name="comment" size={24} color="black" />
                <Text>количество комментариев</Text>
            </Pressable>
            <Text>Локация</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    post: {
        paddingHorizontal: 16,
        marginTop: 32
    },
    imgContainer: {
        height: 240,
        backgroundColor: '#E8E8E8',
        borderRadius: 8
    }
})