import { Kafka, Partitioners } from "kafkajs";

const kafka = new Kafka({
  clientId: "asy-uretici",
  brokers: ["127.0.0.1:9092"],
});

const uretici = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});
let topicMessages = [
  {
    topic: "Yazilim-Muhendisligi",
    messages: [{ value: "Merhaba Yazılım Mühendisliği" }],
  },
  {
    topic: "Web-Teknolojileri",
    messages: [{ value: "Merhaba Web Teknolojileri" }],
  },
];
const produce = async () => {
  await uretici.connect();
  await uretici.sendBatch({ topicMessages });
};

setInterval(() => {
  produce()
    .then(() => console.log("Mesaj üretildi!"))
    .catch(console.error);
}, 3000);
