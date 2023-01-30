import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Platform
} from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';

export default function App() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <RegistrationScreen />

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
