import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Platform
} from 'react-native';
// import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';

export default function App() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />

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
