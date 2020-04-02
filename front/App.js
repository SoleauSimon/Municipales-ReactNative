import React, { useState, useEffect, createRef } from 'react'
import { StyleSheet, SafeAreaView, FlatList, TextInput, ScrollView } from 'react-native'
import Card from './components/card'

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

export default function App() {
  const [comments, setComments] = useState(null)

  const inputRef = createRef()

  const addComment = (e) => {
    let text = e.nativeEvent.text
    console.warn(text)
    text.length > 0 ?
      fetch('http://localhost:9000/api/comments', {
        method: 'post',
        body: JSON.stringify({
          body: text
        })
      })
      .then(res => res.json())
      .then(res => setComments(res))
    : null
  }

  // useEffect(() => {
  //   fetch('http://10.93.183.177:9000/api/comments')
  //   .then(res => res.json())
  //   .then(res => setComments(res))
  // })

  useEffect(() => {
    fetch('http://localhost:9000/api/comments')
      .then(res => res.json())
      .then(res => setComments(res))
  })

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <TextInput
          placeholder="Poster un commentaire"
          style={styles.input}
          onSubmitEditing={(e) => {
              addComment(e)
              inputRef.current.clear()
          }}
          ref={inputRef}
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
      </ScrollView>
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