import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
} from "react-native";
import { SinglePost } from "../../Components/SinglePost";

export const DefaultPostsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Profile Container */}
            <View style={styles.profileContainer}>
                {/* Image Container */}
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/test-avatar.jpg')}
                        objectFit='cover'
                    />
                </View>
                {/* Text Container */}
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Name Shalala</Text>
                    <Text style={styles.email}>shalala@email.com</Text>
                </View>
            </View>
            {/* Here for the testing */}
            <SinglePost navigation={navigation}/>
            <FlatList>
                {/* Тут будут рендериться посты */}
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    profileContainer: {
        backgroundColor: '#fff',
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
    textContainer: {
        marginLeft: 8
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 16
    },
    name: {
        fontFamily: "Roboto-Bold",
        fontSize: 13,
        color: '#212121'
    },
    email: {
        fontFamily: "Roboto-Regular",
        fontSize: 13,
        color: '#212121',
        opacity: 0.8
    }
})