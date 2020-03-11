import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function App() {
  const [comments, setComments] = useState(null)

  fetch('http://localhost:9000/api/comments')
    .then(res => res.json())
    .then(res => setComments(res))
    
  return (
    <SafeAreaView style={styles.container}>
      { 
        comments ?
          comments.map(comment => (
            <Text>{comment.body}</Text>
          ))
        : null
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});