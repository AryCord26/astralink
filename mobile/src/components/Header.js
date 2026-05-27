import { View, Text } from 'react-native'

export default function Header({ title }) {
  return (
    <View
      style={{
        width: '100%',
        padding: 20,
        backgroundColor: '#111827',
        borderBottomWidth: 1,
        borderBottomColor: '#1f2937'
      }}
    >
      <Text
        style={{
          color: '#ff7b00',
          fontSize: 24,
          fontWeight: 'bold'
        }}
      >
        {title}
      </Text>
    </View>
  )
}
