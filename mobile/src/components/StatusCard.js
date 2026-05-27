import { View, Text } from 'react-native'

export default function StatusCard({
  title,
  value
}) {
  return (
    <View
      style={{
        backgroundColor: '#111827',
        padding: 20,
        borderRadius: 20,
        marginBottom: 16
      }}
    >
      <Text
        style={{
          color: '#9ca3af',
          fontSize: 16
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: '#ff7b00',
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: 10
        }}
      >
        {value}
      </Text>
    </View>
  )
}
