import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

export default function App() {
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
});
