<template>
    <div class="svm-body">

        <div class="svm-head">
            <h1>SUPPORT VECTOR MACHINES</h1>
        </div>
        <div class="svm-first">
            <ul>
                <li>SVM, en önemli ve en güçlü Supervised Machine Learning (Gözetimli Öğrenme) tekniklerinden biridir ve çok
                    yaygın kullanılır.</li>
                <li>SVM, hem Classification hem de Regression için kullanılabilir. (daha çok Classification için kullanılır)
                </li>
                <li>SVM ilk defa 1963'te Vladimir N Vapnik ve Alexey Ya. Chervonenkis tarafından geliştirildi.</li>
                <li>İlk zamanlar sadece lineer sınıflandırma için kullanıldı. (sadece doğrusal hyperplane'ler ile
                    çalışıyordu)</li>
                <li>1993'te Corinna Cortes ve Vapnik tarafından Kernel Trick ile beraber artık hem linerr hem de non-lineer
                    sınıflandırma yapabilir hale geldi ve bir anda çok popüler oldu.</li>
            </ul>
        </div>

        <div class="svm-second">
            <div class="svm-second-image">
                <img src="../../../assets/svm.png" alt="">
            </div>
            <div class="svm-second-body">
                <h3>Hyperplane</h3>
                <p>Veri seti içindeki farklı sınıfları birbirinden ayıran, ayırma çizgisine (karar çizgisi - decision
                    boundary) verilen isimdir.SVM Algoritması, noktaların bu Hyperplane'e olan uzaklıklarına göre onları
                    sınıflandırır.
                    Bu Hyperplane'e `Maximum Margin Hyperplane` de denir.
                    Ve bu şekilde bir Hyperplane kullanan algoritmalara da `Maximum Margin Classifier` adı verilir.
                    SVM de bir Maximum Margin Classifier'dır.</p>
                <h3>Support Vectors</h3>
                <p>Hyperplane en yakın olan veri noktalarına `Suppor Vectors` adı verilir.
                    Bu noktalar (Support Vectorler) ile uzaklık hesaplanır ve noktanının Class'ına karar verilir.</p>
                <h3>Margin</h3>
                <p>Hyperplane'in iki yanındaki sınıflara arasındaki mesafeye margin denir.
                    Başka bir deyişle margin, iki sınıf arasındaki uzaklıktır.
                    Sınıfların çizgileri Support Vector'ler üzerinden geçer.
                    SVM'in amacı bu `margini maximize etmektir`.</p>
            </div>
        </div>
        <div class="svm-thridly">
            <div class="svm-thridly-body">
                <div>
                    <h3>Svm Nasıl Çalışır?</h3>
                    <p>SVM'in amacı veri seti içindeki en yüksek margin'e sahip hyperplane'i bulmaktır.
                        Bu hyperplane öyle olmalıdır ki farklı sınıflara ait Support Vectorler arasındaki mesafe maximum
                        olsun.
                        Yani sınıfları en iyi ayıracak düzlem ya da eğrilemi (eğrisel düzlem) arar aslında.</p>
                </div>
                <div>
                    <h4>Bu arama işini şu iki adımda yapar:</h4>
                    <ol>
                        <li>Sınıfları ayıran olası tüm hyperplane'leri hesaplar. Sınıfları ayıran birden çok hyperplane
                            olabilir. Bunlar içinden margini en büyük olanı alır.</li>
                        <li>Dolayısı ile seçtiği hyperplane, kendisi ile Support Vectorler arasındaki mesafenin en büyük
                            olduğu hyperplane'dir. (Eğer böyle bir hyperplane varsa tabi.)</li>
                    </ol>
                </div>
            </div>
            <div class="svm-second-image">
                <img src="../../../assets/hyper.jpg" alt="">
            </div>
        </div>

        <div class="svm-fourthly">
            <div class="svm-fourthly-head">
                <div>
                    <h3>Kernels</h3>
                </div>
                <div>
                    <p>Gerçek hayatta SVM algoritması Kernel'ler ile uygulanır.
                        Kernel: Veriyi az boyuttan alıp çok boyutlu uzaya taşıyan bir fonksiyondur.
                        Kerneller sayesinde, az boyutta birbirinden lineer olarak ayrılamayan veriler, yüksek boyutlarda
                        kolaylıkla ayırabilir duruma gelirler.
                        Bu sayede, normalde lineer bir classifier olan SVM artık non-lineer olarak da çalışabilir duruma
                        gelir.
                    </p>
                </div>
            </div>

            <div class="svm-fourthly-section-1">
                <div>
                    <h3>SVM'de yoğun olarak kullanılan 4 adet Kernel Fonksiyonu vardır:</h3>
                    <ol>
                        <li>Lineer Kernel</li>
                        <li>Polynomial Kernel</li>
                        <li>Radial Basis Function Kernel (RBF) -- en çok kullanılan</li>
                        <li>Sigmoid Kernel</li>
                    </ol>
                </div>
                <div>
                    <h3>Kernel Fonksiyonu</h3>
                    <img src="../../../assets/kernel-rule.png" alt="">
                </div>
            </div>

            <div class="svm-fourthly-section-2">
                <div class="svm-fourthly-section-2-head">
                    <div>
                        <h3>1. Lineer Kernel</h3>
                    </div>
                    <div>
                        <p>
                            Lineer Kernel'de, Kernel Fonksiyonu ($K$), Lineer bir data setini yine Lineer bir data setine
                            dönüştürür.
                            Lineer Kernel basittir ve çoğu yerde iyi sonuç verdiği için yaygın kullanılır.
                        </p>
                        <div>K(x_i , x_j) = x_i^T x_j</div>
                    </div>
                </div>

                <div class="svm-fourthly-section-2-image">
                    <img src="../../../assets/lineer_kernel.png" alt="" class="lineer-kernel-image">
                </div>
            </div>

            <div class="svm-fourthly-section-2">
                <div class="svm-fourthly-section-2-head">
                    <div>
                        <h3>2. Polynomial Kernel</h3>
                    </div>
                    <div>
                        <p>
                            Polynomial Kernel girdi setini polinom dönüşüme ile bir polinom haline getirir. Dolayısı ile lineer olan girdi seti artık non-lineer (eğri) haline gelmiş olur.
                            Polynomial Kernel sadece girdilerin kendilerine değil, aynı zamanda karşılıklı ilişkilerine de bakmış olur.
                            Polynomial Kernel özellikle Natural Language Processing (NLP) uygulamalarında çok kullanılır.
                        </p>
                        <div>K(x_i, x_j) = (\gamma x_i^T x_j + r)^d , \gamma > 0</div>
                    </div>
                </div>

                <div class="svm-fourthly-section-2-image">
                    <img src="../../../assets/poly_kernel.png" alt="">
                </div>
            </div>

            <div class="svm-fourthly-section-2">
                <div class="svm-fourthly-section-2-head">
                    <div>
                        <h3>3. Radial Basis Function Kernel (RBF)</h3>
                    </div>
                    <div>
                        <p>
                            Genel amaçlı bir kernel fonksiyonudur ve en çok kullanılandır. Veri setinde hiçbir ön bilgi olmasına gerek olmadan çalışır.
                            (Kernel dönüşümleri genelde verinin şekline bakarak yapılır.)
                            RBF'e `Gausssian Radial Basis Function Kernel` de denir ve veri noktaları arasındaki mesafeye bakarak karar verir. Mesafe az ise aynı sınıf olma olasılığı daha fazladır. 
                        </p>
                        <div> K(x_i, x_j) = \exp(-\gamma \|x_i-x_j\|^2)</div>
                    </div>
                </div>

                <div class="svm-fourthly-section-2-image">
                    <img src="../../../assets/rbf_kernel.png" alt="">
                </div>
            </div>

            <div class="svm-fourthly-section-2">
                <div class="svm-fourthly-section-2-head">
                    <div>
                        <h3>4. Sigmoid Kernel</h3>
                    </div>
                    <div>
                        <p>
                            Sigmoid (tanh) fonksiyonu ile dönüşüm yapan kerneldir.
                        </p>
                        <div>K(x_i, x_j) = \tanh(\gamma x_i^Tx_j + r)</div>
                    </div>
                </div>

                <div class="svm-fourthly-section-2-image">
                    <img src="../../../assets/sigmoid_kernel.jpg" alt="" class="sigmoid-kernel-image">
                </div>
            </div>
        </div>

        <div class="svm-fourthly-cost">
            <div><h3>SVM Cost Function</h3></div>
            <div><img src="../../../assets/svm_cost_function.png" alt=""></div>
            <div><p>SVM'in Maliyet Fonksiyonu (Cost Function) temel olarak yanlış sınıflandırılmış noktaları cezalandırma ile ilgilidir.
                Ek olarak bir de sonuna Regularizasyon Terimi (Ridge) eklenmiştir.
            </p></div>
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
.svm-body {

    background-color: black;
    background-image: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.svm-head {
    margin-top: 400px;
}

.svm-first {
    margin-top: 400px;
    width: 500px;
}

.svm-first li {
    margin-top: 10px;
}

.svm-second {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 100px;
}
.svm-second-image {
    margin-top: 100px;
}

.svm-second-body {
    width: 400px;
}

.svm-thridly {
    margin-top: 100px;
}

.svm-thridly-body {
    width: 900px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 30px;
}

.svm-fourthly {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.svm-fourthly-head {
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.svm-fourthly-section-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 50px;
    margin-top: 100px;
}

.svm-fourthly-section-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 100px;
    gap: 100px;
}

.svm-fourthly-section-2-head {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.sigmoid-kernel-image, .lineer-kernel-image {
    width: 840px;
    height: 400px;
}

.svm-fourthly-cost {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
}
.svm-fourthly-cost img {
    width: 800px;
}

</style>