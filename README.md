# Kafka NodeJS Demo
* Bu örnekte Kafka ve NodeJS kullanılarak gerçek zamanlı veri üretme ve tüketme gösterilmektedir. 
* Kafka'ya bağlanmak için KafkaJS kütüphanesi kullanılmıştır.
* Kafka Docker kapsayıcısı ile yüklenmektedir. 
* Kapsayıcı ayarları docker-compose.yaml dosyasında yer almaktadır.
* 1 üretici, 2 tüketici mevcuttur.
* 1.tüketici "Yazilim-Muhendisligi" konusunu, 2.tüketici "Yazilim-Muhendisligi" ve "Web-Teknolojileri" konularını tüketmektedir.
* Mesaj akışları terminal ekranlarında gösterilmektedir.

## Adımlar
* `npm install` komutu ile bağımlılıklar yüklenir.
* `docker-compose up` ile Kafka kapsayıcısı çalıştırılır.
* Üretici ve tüketiciler ayrı ayrı terminal ekranlarında çalıştırılır.
* Üreticiyi çalıştırmak için `npm run uretici` komutu kullanılır.
* Tüketici-1'i çalıştırmak için `npm run tuketici-1` komutu kullanılır.
* Tüketici-2'i çalıştırmak için `npm run tuketici-2` komutu kullanılır.
