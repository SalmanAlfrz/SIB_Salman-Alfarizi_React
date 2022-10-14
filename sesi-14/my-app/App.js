import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Button, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://shareicon.net/data/512x512/2016/07/08/117367_logo_512x512.png',
        }}
      />
      <Text style={styles.txt}>Mari kita belajar React Native</Text>
      <Button
        title="Click Me"
        color="blue"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 20,
    margin: 10
  },
  img: {
    height: 100,
    width: 100,
  }
});
