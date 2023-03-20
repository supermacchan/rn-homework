import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    Pressable,
    FlatList
} from 'react-native';
import { useState } from 'react';
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { SinglePost } from "../../Components/SinglePost";

export const DefaultProfileScreen = ({ navigation }) => {
    const [avatar, setAvatar] = useState(null);

    const pickAvatar = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require("../../assets/background.jpg")}
            >
                {/* Profile Container */}
                <View style={styles.profile}>
                    {/* Контейнер для аватарки */}
                    <View style={styles.avatar}>
                        {/* <Image /> */}
                    </View>
                    {/* Кнопка добавить / удалить аватарку */}
                    {!avatar ? (
                        <Pressable style={styles.avatarBtn} onPress={pickAvatar}>
                            <Text style={styles.addAvatar}>
                                <AntDesign name="plus" size={20} color="#FF6C00" />
                            </Text>
                        </Pressable>
                        ) : (
                        <Pressable style={styles.avatarBtn} onPress={() => setAvatar(null) } >
                            <Text style={styles.delAvatar}>
                                <AntDesign name="close" size={20} color="#BDBDBD" />
                            </Text>
                        </Pressable>
                    )}
                    <Text style={styles.title}>Name Shalala</Text>
                    {/* Here for the testing */}
                    <SinglePost navigation={navigation} />
                    <FlatList>
                        {/* Тут будут рендериться посты */}
                    </FlatList>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'flex-end',
    },
    profile: {
        paddingTop: 32,
        paddingBottom: 45,
        paddingHorizontal: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
    },
    avatar: {
        marginTop: -92,
        alignSelf: 'center',
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    avatarBtn: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginTop: -39,
        marginRight: -119.5,
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    addAvatar: {
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#FF6C00',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    delAvatar: {
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginTop: 46,
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
        fontFamily: "Roboto-Medium",
    },
})