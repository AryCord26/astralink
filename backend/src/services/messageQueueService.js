class MessageQueueService {
  simulateLatency(message) {
    return new Promise((resolve) => {
      const marsDelay = 5000

      setTimeout(() => {
        resolve({
          ...message,
          delivered: true
        })
      }, marsDelay)
    })
  }
}

export default new MessageQueueService()
