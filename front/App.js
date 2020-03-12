import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, FlatList, TextInput, View } from 'react-native'
import Card from './components/card'

export default function App() {
  const [comments, setComments] = useState(null)

  useEffect(() => {
    fetch('http://localhost:9000/api/comments')
      .then(res => res.json())
      .then(res => setComments(res))
  })
    
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Poster un commentaire"
        />
        {
          comments 
           && <FlatList
              data={comments}
              renderItem={({ item }) => (
                <Card
                  id={item._id} 
                  text={item.body}
                  likes={item.likes}
                  date={item.createdAt}
                />
                )}
                keyExtractor={item => item._id}
            />
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20
  },
  input: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginBottom: 30,
    fontSize: 18
  }
})