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
            {/* Профиль */}
            <View>
                <Image />
                <Text>ИМЯ</Text>
                <Text>EMAIL</Text>
            </View>
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
})