import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity, 
  Platform
} from 'react-native';

export default function App() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
       <ImageBackground
        style={styles.image}
        source={require("./assets/test-background.jpg")}
      >
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email address</Text>
            <TextInput style={styles.input} textAlign='center' />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput style={styles.input} textAlign='center' secureTextEntry={true} />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.btnTitle}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: '#fff',
    fontSize: 15,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    height: 40,
    borderRadius: 6,
    color: "#fff",
    fontSize: 18,
  },
  button: {
    ...Platform.select({
      ios: {
        backgroundColor: 'transparent',
        borderColor: '#fffafa',
      },
      android: {
        backgroundColor: '#fffafa',
        borderColor: 'transparent',
      }
    }),
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 90,
  },
  btnTitle: {
    color: '#191970',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
