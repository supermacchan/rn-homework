import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
} from "react-native";
import { SinglePost } from "../../Components/SinglePost";

export const PostsScreen = () => {
    return (
        <View style={styles.container}>
            {/* Profile Container */}
            <View style={styles.profileContainer}>
                {/* Image Container */}
                <View style={styles.imgContainer}>
                    <Image />
                </View>
                {/* Text Container */}
                <Text style={styles.name}>ИМЯ</Text>
                <Text style={styles.email}>EMAIL</Text>
            </View>
            <SinglePost />
            <FlatList>
                <SinglePost />
                {/* Тут будут рендериться посты */}
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 32,
    },
    profileContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgContainer: {
        backgroundColor: '#E8E8E8',
        width: 60,
        height: 60,
        borderRadius: 16,
    },
    name: {

    },
    email: {

    }
})