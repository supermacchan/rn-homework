import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { RegistrationScreen } from './Screens/auth/RegistrationScreen';
import { LoginScreen } from './Screens/auth/LoginScreen';
import { CreatePostsScreen } from './Screens/main/CreatePostsScreen';
import { PostsScreen } from './Screens/main/PostsScreen';

const fonts = {
  "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf")
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(fonts);
        SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      {/* <CreatePostsScreen /> */}
      <PostsScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
