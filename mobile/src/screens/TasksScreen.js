import { useEffect, useState } from 'react'

import {
  View,
  Text,
  ScrollView
} from 'react-native'

import api from '../services/api'

import Header from '../components/Header'
import StatusCard from '../components/StatusCard'

export default function TasksScreen() {
  const [tasks, setTasks] = useState([])

  async function loadTasks() {
    try {
      const response = await api.get('/tasks')

      setTasks(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#050816',
        padding: 20
      }}
    >
      <Header title="Mission Tasks" />

      <View style={{ marginTop: 20 }}>
        {tasks.map((task) => (
          <StatusCard
            key={task.id}
            title={task.title}
            value={task.status}
          />
        ))}
      </View>
    </ScrollView>
  )
}
