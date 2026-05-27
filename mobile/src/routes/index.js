import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import TasksScreen from '../screens/TasksScreen'
import MessagesScreen from '../screens/MessagesScreen'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
        />

        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
