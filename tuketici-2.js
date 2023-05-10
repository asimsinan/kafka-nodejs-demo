import { Kafka } from "kafkajs"

const kafka = new Kafka({
	clientId: "asy-tuketici-2",
	brokers: ["127.0.0.1:9092"]
})

const tuketici = kafka.consumer({ groupId: "asy-grup-2" })

const consume = async () => {
	await tuketici.connect()
	await tuketici.subscribe({ topics: ["Web-Teknolojileri","Yazilim-Muhendisligi"], fromBeginning: false })

	await tuketici.run({
		partitionsConsumedConcurrently: 3,
		eachMessage: async ({ topic, partition, message }) => {
			console.log({
				topic:topic,
				value: message.value.toString()
			})
		},
	})
}

consume().catch(console.error)
