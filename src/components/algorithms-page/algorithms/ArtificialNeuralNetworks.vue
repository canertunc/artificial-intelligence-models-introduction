<template>
    <div class="ann-body">
        <div class="ann-head">
            <h1>ARTIFICIAL NEURAL NETWORKS</h1>
        </div>

        <div class="ann-first">

            <div class="ann-first-int for-top">
                <p>Yapay sinir ağları ,insan beyninden esinlenilerek geliştirilmiş bir mekanizmadır. Yazımda, yapay sinir
                    ağları terimi, kısa bir kullanım olması için ANN olarak geçecektir. ANN’nin temel bileşeni yapay
                    nöronlardır.</p>
            </div>
            <div class="ann-first-int">
                <p>Her nöron, diğer birkaç nörondan girdi alır, bunları atanan ağırlıklarla çarpar, ekler ve toplamı bir
                    veya daha fazla nörona aktarır. Bazı yapay nöronlar, çıktıyı bir sonraki değişkene geçirmeden önce
                    çıktıya bir aktivasyon işlevi uygulayabilir. Bu işlem aşağıda görülmektedir.</p>
            </div>

            <div class="ann-image">
                <img src="../../../assets/ann.png" alt="">
            </div>

            <div class="ann-first-mid">
                <p>Çok fazla miktarda nöronun bir araya gelmesi ile görüntüleri sınıflandırma veya konuşmayı tanıma gibi çok
                    karmaşık görevleri yerine getirebilen yapay bir sinir ağı elde edilir.</p>
            </div>
            <div class="ann-first-mid">
                <p>Ağın işlevine göre ANN ,dış kaynaklardan (veri dosyaları, görüntüler, donanım sensörleri, mikrofon …)
                    veri alan bir girdi katmanından, verileri işleyen bir veya daha fazla gizli katmandan ve bir veya daha
                    fazla veri noktası sağlayan bir çıktı katmanından oluşur. ANN, üç ana katmanda incelenir: Giriş Katmanı,
                    Ara (Gizli) Katmanlar ve Çıkış Katmanı. Görselde katmanlar verilmiştir.</p>
            </div>
            <div class="ann-image-two">
                <img src="../../../assets/ann-two.png" alt="">
            </div>

            <div class="ann-first-mid for-top-two">
                <p>ANN, nöronlar arasındaki bağlantıların ağırlıklarına rastgele değerler atayarak çalışmaya başlar. ANN
                    mekanizmasının doğru çalışması için ağırlık seçiminin doğru yapılması önemlidir. Bu işlemi doğru yapması
                    için konuyu bir örnekle daha iyi açıklayalım. Bilgisayardan insanı ve kediyi ayırmasını istiyoruz. Bunun
                    için bilgisayara birer adet fotoğraf vermek doğru değildir. Ne kadar fazla veri yüklenirse bilgisayarın
                    eğitim örneği artar ve sinir ağı her bir girişi doğru çıktılarla eşleştirmek için ağırlıklarını kademeli
                    olarak ayarlar.</p>
            </div>


            <div class="ann-first-mid">
                <p>Her bir katmanda görselin farklı bir özelliği seçilerek tanımlama işlemi gerçekleştirilir. İlk katmanda
                    çizgiler ver köşeler ayırt edilirken daha sonraki katmanlarda eğrilikler algılanabilir. Aşağıda
                    katmanların seçim işlemi için bir örnek yer almaktadır.</p>
            </div>

            <div class="ann-image-two">
                <img src="../../../assets/ann-three.jpg" alt="">
            </div>

            <div class="ann-first-final for-top-two">
                <h4>ANN bilgisayar sistemi ikiye ayrılır. Bunlar: FeedForward ANN ve Feedback ANN ‘dir.
                    Şimdi ANN türlerini inceleyelim.</h4>
            </div>
            <div class="ann-first-final">
                <h3>1.FeedForward ANN ( İleri Beslemeli ANN Modeli):</h3>
                <p>Bu ANN türünde bilgi akışı tek yönlüdür. Bir birim, herhangi bir bilgi almadığı diğer birime bilgi
                    gönderir. Geri bildirim döngüsü mevcut değildir. Örüntü oluşturma ,tanıma ,sınıflandırmada kullanılır.
                    Sabit giriş ve çıkışlara sahiptir.
                    Çalışma mekanizması aşağıda görülmektedir.</p>
            </div>
            <div class="ann-image-two">
                <img src="../../../assets/ann-feed-forward.webp" alt="">
            </div>

            <div class="ann-first-final for-top-two">
                <h3>2. Feedback ANN (Geri Beslemeli ANN Modeli):</h3>
                <p>Bu türde geri bildirim döngülerine izin verilir. İçerik adreslenebilir hafızalarda kullanılır. Görselde görülmektedir.</p>
            </div>
            <div class="ann-image-two">
                <img src="../../../assets/ann-feed-back.webp" alt="">
            </div>

        </div>
    </div>
    <appFooter />

</template>

<script>
import appFooter from "@/components/appFooter.vue"

export default {
    components : {
    appFooter : appFooter,
},
}
</script>

<style>
.ann-body {
    background-color: black;
    background-image: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: aliceblue;
}

.ann-head {
    margin-top: 400px;
    text-align: center;
}

.ann-first {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 400px;
}



.ann-first-int {
    width: 800px;
}

.ann-image {
    background-color: aliceblue;
    margin-top: 100px;
}

.ann-first-mid {
    width: 700px;
    margin-top: 100px;
}

.ann-image-two {
    margin-top: 100px;
}

.ann-image-two {
    margin-top: 100px;
}

.for-top-two {
    margin-top: 100px;
}

.ann-first-final {
    width: 700px;

}
</style>