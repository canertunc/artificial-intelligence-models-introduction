<template>
    <div class="cnn-body">

        <div class="cnn-head">

            <h1>Convolutional Neural Networks</h1>


        </div>

        <div class="cnn-first">
            <div>
                <img src="../../../assets/cnn.webp" alt="">
            </div>

            <div class="cnn-first-int">
                <p>Facebook’a bir resim yüklediğinizde size “X kişisini etiketlemek istermisiniz?” şeklinde bir önermede
                    bulunur. Peki o kişiyi nasıl bildiğini merak ettiniz mi?
                    Veya Google’ın resim arama algoritması nasıl çalışır hiç düşündünüz mü?
                    İşte tüm bunların arkasında bir sinir ağı vardır. Daha net olmak gerekirse, Convolutional Neural
                    Networkten (ConvNet yada CNN) söz ediyoruz. (Türkçeye Evrişimsel Sinir Ağları olarak çevriliyor). CNN
                    biyoloji ve bilgisayar bilimlerinin garip bir karışımı gibi görünse de, bu, resim tanıma için kullanılan
                    çok etkili bir mekanizmadır.</p>
            </div>

            <div class="for-top">
                <img src="../../../assets/cnn-int.jpg" alt="">
            </div>

            <div class="cnn-first-int for-top">
                <h2>Fikrin Arkasındaki Biyoloji</h2>
                <p>Cnn verilen görüntüleri ayırt etmek için bir uçağı uçak ya da yılanı yılan haline getiren benzersiz
                    özellikleri kullanırlar. Aslında bu süreç beynimizde de bilinçsizce oluyor.
                    Örneğin, bir uçak resmine baktığımızda, iki kanat, motor, pencere gibi özellikleri birbirinden ayırarak
                    uçağı tanımlayabiliriz. Cnn de aynı şeyi yapar, ancak daha önce eğriler ve kenarlar gibi alt düzey
                    özellikleri tespit ederler ve daha soyut kavramlara kadar bunları oluştururlar.</p>
            </div>

            <div class="cnn-first-int for-top">
                <h2>Evrişimsel Sinir Ağlarının Yapısı</h2>
                <p>Konuştuğumuz işlevselliği elde etmek için, Cnn görüntüyü çeşitli katmanlarla işler. Bu katmanları yazının
                    bir sonraki bölümünde ayrıntılı olarak inceleyeceğiz ancak şu an sadece bu katmanlara ve amaçlarına
                    genel bir bakış yapalım:</p>
            </div>

            <div class="cnn-first-int for-top">
                <ul>
                    <li><b>Convolutional Layer</b> — Özellikleri saptamak için kullanılır</li>
                    <li><b>Non-Linearity Layer</b> — Sisteme doğrusal olmayanlığın (non-linearity) tanıtılması</li>
                    <li><b>Pooling (Downsampling) Layer</b> — Ağırlık sayısını azaltır ve uygunluğu kontrol eder</li>
                    <li><b>Flattening Layer</b> — Klasik Sinir Ağı için verileri hazırlar</li>
                    <li><b>Fully-Connected Layer</b> — Sınıflamada kullanılan Standart Sinir Ağı</li>
                </ul>
            </div>

            <div class="for-top">
                <img src="../../../assets/cnn-int-two.png" alt="">
            </div>

            <div class="cnn-first-int for-top">
                <p>Temel olarak, Cnn, sınıflandırma sorununun çözümü için standart Sinir Ağı kullanır, ancak bilgileri
                    belirlemek ve bazı özellikleri tespit etmek için diğer katmanları kullanır.
                    Haydi her katmanın ve işlevlerinin detaylarına dalalım.</p>
            </div>

            <div class="cnn-first-int for-top">
                <h2>Convolutional Layer</h2>
                <p>Bu katman CNN’nin ana yapı taşıdır. Resmin özelliklerini algılamaktan sorumludur. Bu katman, görüntüdeki
                    düşük ve yüksek seviyeli özellikleri çıkarmak için resme bazı fitreler uygular. Örneğin, bu filtre
                    kenarları algılayacak bir filtre olabilir. Bu filtreler genellikle çok boyutludur ve piksel değerleri
                    içerirler.(5x5x3) 5 matrisin yükseklik ve genişliğini, 3 matrisin derinliğini temsil eder.
                    Şimdi mu filtrenin nasıl uygulandığına bakalım;</p>
            </div>
            <div class="for-top">
                <img src="../../../assets/cnn-three.png" alt="">
            </div>

            <div class="cnn-first-int for-top">
                <p>Örneğin basit olması için sadece 1 kanal işlenecektir.
                    Resimin 5×5 boyutunda ve 1 ve 0 ‘lardan oluşan bir resim olduğunu varsayalım. Filtremizi 3×3 boyutunda
                    oluşturalım.</p>
            </div>

            <div class="for-top">
                <img src="../../../assets/cnn-four.png" alt="">
            </div>

            <div class="cnn-first-int for-top">
                <p>Öncelikle, filtre görüntünün sol üst köşesine konumlandırılır. Burada, iki matris arasında (resim ve
                    filtre) indisler birbirisi ile çarpılır ve tüm sonuçlar toplanır, daha sonra sonucu çıktı matrisine
                    depolanır. Ardından, bu filtreyi sağa 1 piksel (“basamak” olarak da bilinir) kadar hareket ettirip
                    işlemi tekrarlanır. 1. Satır bittikten sonra 2 satıra geçilir ve işlemler tekrarlanır. Tüm işlemler
                    bittikten sonra çıktı matrisi oluşturulur. Burada çıktı matrisinin 3×3 olmasının nedeni 5×5 matrisinde
                    3×3 filtresi yatayda ve dikeyde 3 kez hareket etmesinden kaynaklanır.
                    Eğer resim 6×4 ve filtre 3×3 boyutunda olsaydı çıkış matrisi 4×2 boyutunda olurdu.
                    Peki çıktı matrisi bize ne anlatıyor? Bu matrise genellikle Feature Map denir. Filtre tarafından temsil
                    edilen özellikte görüntünün bulunduğu yeri gösterir. Kısacası, filtreyi görüntü üzerinden hareket
                    ettirerek ve basit matris çarpımını kullanarak, özelliklerimizi tespit ediyoruz.
                    Genellikle, birden çok özelliği tespit etmek için birden fazla filtre kullanlır, yani bir Cnn ağında
                    birden fazla konvolüsyonel (Convolutional) katman bulunur.</p>
            </div>

            <div class="cnn-first-int for-top">
                <h2>Bir adım daha</h2>
                <p>İlk filtreyi uyguladığımızda, bir Feature Map oluşturuyor ve bir özellik türünü tespit ediyoruz.
                    Ardından, ikinci bir filtre kullanıp başka bir özellik türünü algılayan ikinci bir Feature Map
                    oluştururuz.
                    Yukarıdaki örnekte görebildiğimiz gibi bu filtreler basit olabilir, ancak görüntüde bazı karmaşık
                    özellikler çıkarmak istiyorsanız bu filtreler karmaşık hale gelebilirler. Daha karmaşık olan filtreleri
                    görmek için aşağıdaki resme gözatabilirsiniz.</p>
            </div>
            <div class="for-top">
                <img src="../../../assets/cnn-six.png" alt="">
            </div>

            <div class="cnn-first-int for-top">
                <p>Daha önce bahsettiğimiz, ancak ayrıntılı olarak açıklamadığımız bir başka şey, stride (büyük adım).
                    Bu terim genellikle padding terimi ile birlikte kullanılır. Stride, filtrenin giriş görüntüsünün
                    etrafında nasıl evrildiğinini denetler. Yukarıdaki örnekte Stride 1 piksel idi, ancak daha büyük
                    olabilir. Bu, Feature Map’in çıktısının boyutunu etkiler.
                    Cnn’nin ilk aşamalarında, ilk filtreleri uygularken, diğer Convolutional Katmanlar için mümkün olduğunca
                    çok bilgiyi korumamız gerekir. İşte padding bu nedenden dolayı kullanılır. Feature Map’in orijinal giriş
                    görüntüsünden daha küçük olduğunu fark etmişsinizdir. Bu nedenle Padding, (aşağıdaki resimde olduğu
                    gibi)resmin boyutunu korumak için bu haritaya sıfır değerler katacaktır:</p>
            </div>

            <div class="for-top">
                <img src="../../../assets/cnn-seven.png" alt="">
            </div>


            <div class="cnn-first-int for-top">
                <h2>Non-linearity</h2>
                <p>Tüm Convolutional katmanlarından sonra genellikle Non-Linearity(doğrusal olmayan) katmanı gellir. Peki
                    görüntüdeki doğrusallık neden bir problemdir? Sorun şu ki, tüm katmanlar doğrusal bir fonksiyon
                    olabildiğinden dolayı Sinir Ağı tek bir perception gibi davranır, yani sonuç, çıktıların linear
                    kombinasyonu olarak hesaplanabilir.
                    Bu katman aktivasyon katmanı (Activation Layer) olarak adlandırılır çünkü aktivasyon fonksiyonlarından
                    birini kullanılır. Geçmişte, sigmoid ve tahn gibi doğrusal olmayan fonksiyonlar kullanıldı, ancak Sinir
                    Ağı eğitiminin hızı konusunda en iyi sonucu Rectifier(ReLu) fonksiyonu verdiği için artık bu fonksiyon
                    kullanılmaya başlanmıştır.
                    ReLu Fonksiyonu f (x) = max (0, x)
                    ReLu fonksiyonunun Feature Map’a uygulandığında aşağıdaki gibi bir sonuç üretilir.</p>
            </div>

            <div class="for-top">
                <img src="../../../assets/cnn-eight.png" alt="">
            </div>

            <div class="cnn-first-int for-top">
                <p>Feature Map’taki siyah değerler negatiftir. Relu fonksiyonu uygulandıktan sonra siyah değerler kaldırılır
                    onun yerine 0 konur.</p>
            </div>

            <div class="cnn-first-int for-top">
                <h2>Pooling Layer</h2>
                <p>Bu katman, CovNet’teki ardışık convolutional katmanları arasına sıklıkla eklenen bir katmandır. Bu
                    katmanın görevi, gösterimin kayma boyutunu ve ağ içindeki parametreleri ve hesaplama sayısını azaltmak
                    içindir. Bu sayede ağdaki uyumsuzluk kontrol edilmiş olur. Birçok Pooling işlemleri vardır, fakat en
                    popüleri max pooling’dir. Yine aynı prensipte çalışan average pooling, ve L2-norm pooling
                    algoritmalarıda vardır.
                    Bu işlemi şekiller üzerinden açıklayarak gidelim. Öncelikle 2×2 boyutunda bir filtre oluşturalım. Bu
                    filtreyi aşağıdaki (4×4) resim üzerinde görebilirsiniz. Resimde gördüğünüz gibi, filtre, kapsadığı
                    alandaki en büyük sayıyı alır. Bu sayede, sinir ağının doğru karar vermesi için için yeterli bilgiyi
                    içeren daha küçük çıktıları kullanmış olur.</p>
            </div>


            <div class="for-top">
                <img src="../../../assets/cnn-nine.png" alt="">
            </div>

            <div class="cnn-first-int for-top">
                <p>Bununla birlekte birçok kişi bu katmanı kullanmayı tercih etmez. Bunun yerine Convolutional katmanında
                    daha büyük Stride (Filtreyi kaydırma işlemi) tercih edilir. Ayrıca variational autoencoders (VAEs) or
                    generative adversarial networks (GANs) gibi daha üretken modellerde pooling katmanını tamen çıkartırlar.
                </p>
            </div>

            <div class="cnn-first-int for-top">
                <h2>Flattening Layer</h2>
                <p>Bu katmanın görevi basitçe, son ve en önemli katman olan Fully Connected Layer’ın girişindeki verileri
                    hazırlamaktır. Genel olarak, sinir ağları, giriş verilerini tek boyutlu bir diziden alır. Bu sinir
                    ağındaki veriler ise Convolutional ve Pooling katmanından gelen matrixlerin tek boyutlu diziye çevrilmiş
                    halidir.</p>
            </div>

            <div class="for-top">
                <img src="../../../assets/cnn-ten.png" alt="">
            </div>

            <div class="cnn-first-int for-top">
                <h2>Fully-Connected Layer</h2>
                <p>Bu katman ConvNet’in son ve en önemli katmanıdır. Verileri Flattening işleminden alır ve Sinir ağı
                    yoluyla öğrenme işlemini geçekleştirir.
                    Bu katman başlı başına bir derya olduğundan dolayı bu yazıdaincelenmeyecktir.</p>
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
.cnn-body {
    background-color: black;
    background-image: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: aliceblue;
}

.cnn-head {
    margin-top: 400px;
    text-align: center;
}

.cnn-first {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 400px;
}

.cnn-first-int {
    width: 800px;
    margin-top: 200px;

}

.for-top {
    margin-top: 100px;
}
</style>