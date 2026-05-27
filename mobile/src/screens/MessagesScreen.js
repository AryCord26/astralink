import { useEffect, useState } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import api from '../services/api'

import Header from '../components/Header'

export default function MessagesScreen() {
  const [messages, setMessages] = useState([])
  const [content, setContent] = useState('')

  async function loadMessages() {
    const response = await api.get('/messages')

    setMessages(response.data)
  }

  async function sendMessage() {
    await api.post('/messages', {
      sender: 'Mars Crew',
      content
    })

    setContent('')
    loadMessages()
  }

  useEffect(() => {
    loadMessages()
  }, [])

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#050816',
        padding: 20
      }}
    >
      <Header title="Communications" />

      <TextInput
        placeholder="Type your message..."
        placeholderTextColor="#9ca3af"
        value={content}
        onChangeText={setContent}
        multiline
        style={{
          backgroundColor: '#111827',
          color: '#fff',
          borderRadius: 20,
          padding: 20,
          minHeight: 120,
          marginTop: 20
        }}
      />

      <TouchableOpacity
        onPress={sendMessage}
        style={{
          backgroundColor: '#ff7b00',
          padding: 16,
          borderRadius: 20,
          marginTop: 16
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          Send Transmission
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 30 }}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={{
              backgroundColor: '#111827',
              padding: 20,
              borderRadius: 20,
              marginBottom: 16
            }}
          >
            <Text
              style={{
                color: '#ff7b00',
                fontWeight: 'bold'
              }}
            >
              {message.sender}
            </Text>

            <Text
              style={{
                color: '#fff',
                marginTop: 10
              }}
            >
              {message.content}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
