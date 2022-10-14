import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  let posts = []
  for (let i = 1; i <= 15; i++) {
    posts.push({
      title: `Title ${i}`,
      description: `Description for title ${i}`
    }
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {posts.map((post, idx) => {
          return (
            <View style={styles.box} key={idx}>
              <Text style={styles.title}>{post.title}</Text>
              <Text>{post.description}</Text>
            </View>
          )
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  scroll: {
    backgroundColor: '#C2B8A2',
    padding: 10
  },
  box: {
    backgroundColor: '#FEF7DC',
    padding: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});