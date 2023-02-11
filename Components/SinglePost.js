import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

export const SinglePost = () => {
    return (
        <View style={styles.post}>
            {/* Image container */}
            <View style={styles.imgContainer}>
                <Image />
            </View>
            <Text>Название</Text>
            {/* комментарии */}
            <Text>Локация</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    post: {

    },
    imgContainer: {
        
    }
})