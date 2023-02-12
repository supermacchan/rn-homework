import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

export const SinglePost = () => {
    return (
        <View style={styles.post}>
            {/* Image container */}
            <View style={styles.imgContainer}>
                <Image />
            </View>
            <Text style={styles.title}>Название</Text>
            <Pressable style={styles.commentsBtn}>
                <EvilIcons name="comment" size={24} color="#BDBDBD" />
                <Text style={styles.comments}>000</Text>
            </Pressable>
            <Pressable>
                <AntDesign name="enviromento" size={24} color="#BDBDBD" />
                <Text>Локация</Text>
            </Pressable>
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
    },
    title: {
        fontFamily: "Roboto-Medium",
        fontSize: 16,
        color: '#000',
        marginTop: 8,
    },
    commentsBtn: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    comments: {
        color: '#BDBDBD',
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        marginLeft: 6,
    }
})