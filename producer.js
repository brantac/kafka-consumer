import { Kafka } from 'kafkajs'
import { randomUUID } from 'node:crypto'

async function bootstrap() {
    const kafka = new Kafka({
        clientId: 'test-producer',
        brokers: ['ideal-troll-12921-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'aWRlYWwtdHJvbGwtMTI5MjEkgB4l1GAP7JlkuQEpCdCjnU3T1vY3i87U96Q-rxc',
          password: 'Xm7xxEAjwAtqVqvTqE8EOZDboW8GpZ53wZiNUgJnnzMogE-WsEhwDkCxfGNbr6iYehkaEw==',
        },
        ssl: true,
      })
       
      const producer = kafka.producer()

      await producer.connect()
      
      await producer.send({
        topic: 'notifications.send-notification',
        messages: [
            {
                value: JSON.stringify({
                    content: 'Nova solicitação de amizade!',
                    category: 'social',
                    recipientId: randomUUID(),
                }),
            }
        ],
      })

      await producer.disconnect();
}
bootstrap();