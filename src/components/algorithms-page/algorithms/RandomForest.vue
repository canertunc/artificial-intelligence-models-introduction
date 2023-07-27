<template>
    <div class="rf-body">

        <div class="rf-head">
            <h1>RANDOM FORESTS</h1>

        </div>

        <div class="rf-first">
            <div class="rf-first-list">
                <ul>
                    <li>Random Forests (RF), yaygın olarak kullanılan bir Supervised ML algoritmasıdır.</li>
                    <li>Hem Classificaton hem de Regression kullanılan türevleri mevcuttur.</li>
                    <li>Çok kolay ve son derece esnektir ama bir o kadar da iyi sonuç verir.</li>
                </ul>
            </div>

            <div class="rf-first-image">
                <img src="../../../assets/random-forests.png" alt="">
            </div>

            <div class="rf-first-int">
                <p>Temel olarak, Verilen data üzerinde rasgele Decision Tree'ler oluşuturarak çalışır.
                    Bu DT'lerden her biri üzerinden bir tahmin yapar ve oylama yöntemi ile en iyi sonuca ulaşır.
                    Ek olarak, hangi değişkenlerin önemli olduğuna (Feature Importance) karar vermede de çok sık olarak
                    kullanılır.
                    Random Forests Algoritması, birden çok DT'yi birleştirir ve böylece ortaya bir orman (forest) çıkar.
                    Random Forest ismi de buradan gelir.
                    RF'de ağaç sayısı arttıkça Accuracy değeri de artar. (Önemli: Overfitting'e dikkat!)</p>
            </div>

            <div class="rf-first-understand">
                <div>
                    <h3>Random Forest'i Anlamak</h3>
                </div>

                <div class="rf-first-understand-body">

                    <h6>RF Algoritması iki aşamada gerçekleşir:</h6>
                    <p>İlk aşamada, <i>p</i> adet toplam değişken (feature) içinden <i>k</i>adedi rasgele olarak seçilir (p
                        > k). Ve bu k adet ile bir DT oluşturulur.</p>
                </div>

                <div class="rf-first-understand-body-details">
                    <div>
                        <ul>
                            <li>n: toplam data sayısı (satır sayısı)</li>
                            <li>p: toplam değişken (feature) sayısı (sütun sayısı)</li>
                            <li>k: rasgele seçilen feature sayısı</li>
                            <li>l: bir DT içindeki maximum toplam node sayısı</li>
                            <li>m: RF içindeki toplam DT sayısı (orman içindeki ağaç sayısı)</li>
                        </ul>
                    </div>
                    <div>
                        <ol>
                            <li>Toplam **p** adet feature içinden rasgele olarak **k** adedi seçilir.</li>
                            <li>Bu **k** feauture içinden en iyi split'i sağlayacak root node seçilir.</li>
                            <li>Bu root node, alt node'lara, onlar da alt node'lara split edilerek devam eder.</li>
                            <li>Toplam **l** adet node elde edilene kadar 1.-3. adımlar tekrarlanır.</li>
                            <li>1.-4. adımlar **m** kere tekrarlanarak, **m** adet DT elde edilir.</li>
                        </ol>
                    </div>

                    <div>
                        <h4>İkinci aşamada, artık train etmiş olduğumuz RF ile tahmin yaparız:</h4>
                        <ol>
                            <li>En iyi sonucu vermiş olan RF parametrelerini Test data üzerinde çalıştırırız.</li>
                            <li>Sonra her bir DT'nin vermiş olduğu sonuçlar arasında oylama yaparız.</li>
                            <li>En yüksek sonucu veren aday bizim için nihai model olur.</li>
                        </ol>
                    </div>

                    <div>
                        <img src="../../../assets/rf.jpg" alt="">
                    </div>

                    <div class="rf-avantage-deavantage">
                        <div><h4>RF'in Avantajları ve Dezavantajları</h4></div>
                        <div>
                            <h5>RF'nin Avantajları:</h5>
                            <ol>
                                <li>Hem Classification hem de Regression için kullanılabilir</li>
                                <li>Çok fazla sayıda DT oluşturup bunlar üzerinden tahmin yaptığı için sonuçları son derece güvenilir kabul edilir</li>
                                <li>Çok fazla ve bağımsız DT ile sonuç ürettikleri ve her seferinde farklı bir değişken seti kullandıkları için hem `düşük bias` hem de düşük `overfitting`sağlarlar</li>
                                <li>Feature Selection için kullanılabilirler</li>
                            </ol>
                        </div>
                        <div>
                            <h5>RF'nin Dezavantajları:</h5>
                            <ol>
                                <li>Computational Complexity. Çok fazla decision tree demek yüksek oranda performans gerekmesi demek. Dolayısı ile RF'ler maliyetli algoritmalardır</li>
                                <li>Tek bir DT değil, çok sayıda ve rasgele seçilmiş parametreler ile tahmin yaptıkları için sonuçlarını yorumlamak çok zordur</li>
                            </ol>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
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
.rf-body {
    background-color: black;
    background-image: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: aliceblue;
}

.rf-head {
    margin-top: 400px;
    text-align: center;
}

.rf-first {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 400px;
}

.rf-first-list {
    width: 500px;
}

.rf-first-int {
    width: 800px;
    margin-top: 100px;
}

.rf-first-image img {

    width: 1000px;
    margin-top: 100px;
}

.rf-first-understand {
    margin-top: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.rf-first-understand-body {
    text-align: center;
    width: 1100px;
}

.rf-first-understand-body-details {
    width: 450px;
    margin-top: 75px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
}

.rf-first-understand-body-details li {
    margin-top: 10px;
}
.rf-avantage-deavantage {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    margin-top: 100px;
}

</style>