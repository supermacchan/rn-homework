import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground
        style={styles.image}
        source={require("./assets/test-background.jpg")}
      >
        <Text style={styles.text}>Let's begin!</Text>
        <TextInput style={styles.input} textAlign={'center'} />
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
  text: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    marginHorizontal: 40,
    height: 40,
    borderRadius: 6,
    color: "#fff",
  }
});
