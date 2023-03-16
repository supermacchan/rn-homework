// import {
//     StyleSheet,
//     View,
//     Text,
//     Image,
//     FlatList
// } from "react-native";
// import { SinglePost } from "../../Components/SinglePost";

// export const PostsScreen = () => {
//     return (
//         <View style={styles.container}>
//             {/* Profile Container */}
//             <View style={styles.profileContainer}>
//                 {/* Image Container */}
//                 <View style={styles.imgContainer}>
//                     <Image
//                         style={styles.image}
//                         source={require('../../assets/test-avatar.jpg')}
//                         objectFit='cover'
//                     />
//                 </View>
//                 {/* Text Container */}
//                 <View style={styles.textContainer}>
//                     <Text style={styles.name}>Name Shalala</Text>
//                     <Text style={styles.email}>shalala@email.com</Text>
//                 </View>
//             </View>
//             {/* Here for the testing */}
//             <SinglePost />
//             <FlatList>
//                 {/* Тут будут рендериться посты */}
//             </FlatList>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         paddingHorizontal: 16,
//     },
//     profileContainer: {
//         backgroundColor: '#fff',
//         marginTop: 32,
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     imgContainer: {
//         backgroundColor: '#E8E8E8',
//         width: 60,
//         height: 60,
//         borderRadius: 16,
//     },
//     textContainer: {
//         marginLeft: 8
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//         borderRadius: 16
//     },
//     name: {
//         fontFamily: "Roboto-Bold",
//         fontSize: 13,
//         color: '#212121'
//     },
//     email: {
//         fontFamily: "Roboto-Regular",
//         fontSize: 13,
//         color: '#212121',
//         opacity: 0.8
//     }
// })


import { createStackNavigator } from '@react-navigation/stack';
import { DefaultPostsScreen } from '../nested/DefaultPostsScreen';
import { MapScreen } from '../nested/MapScreen';
import { CommentsScreen } from '../nested/CommentsScreen';

import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NestedScreen = createStackNavigator();

export const PostsScreen = ({ navigation }) => {
  return (
      <NestedScreen.Navigator
          initialRouteName="Posts"
          screenOptions={{

          }}
      >
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
        options={{
          headerTitle: 'Публикации',
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: 'Roboto-Medium',
            color: '#212121',
          },
          headerLeft: false,
          headerRight: () => (
            <Pressable style={{paddingRight: 15}}>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </Pressable>
          ),
          headerStyle: {
            borderBottomWidth: 0.3,
            borderBottomColor: '#B3B3B3',
          },
          headerTitleAlign: 'center',
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
            headerTitle: 'Карта',
            headerTitleAlign: 'center'
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
            headerTitle: 'Комментарии',
            headerTitleAlign: 'center',
            }}
      />
    </NestedScreen.Navigator>
  );
};