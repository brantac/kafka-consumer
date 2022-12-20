# Kafka producer

This is a simple Kafka producer, that sends notifications to the `'notifications.send-notification'` topic. It was created to test [brantac/notifications-service](https://github.com/brantac/notifications-service).

## Packages installed
- kafkajs
- dotenv

## Clone this repository

```
git clone https://github.com/brantac/kafka-producer.git
```

## Installation

```bash
# yarn
yarn install

# npm
npm install
```

## Running the app

```bash
node producer.js
```

## Set up your Kafka credentials

Create a .env file and set your username, password and broker.

```.env
KAFKA_USERNAME="username"
KAFKA_PASSWORD="password"
KAFKA_BROKERS="broker"
```