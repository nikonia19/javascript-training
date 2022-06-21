// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyon

function kelimeYazdir(kelime, adet) {
    for (let i = 0; i < adet; i++) {
        console.log(kelime);
    }
}

kelimeYazdir("merhaba", 3);

// 2- dikdörtgenin alan ve çevresini hesaplayan fonksiyon

function alanCevreHesapla(kisa, uzun) {
    let alan = kisa * uzun;
    let cevre = (kisa + uzun) * 2;

    return `alan: ${alan} çevre: ${cevre}`;
}

let sonuc = alanCevreHesapla(7,10);
sonuc = alanCevreHesapla(7,10);
console.log(sonuc);

// 3- yazı tura uygulamasını fonksiyon kullanarak yaz

function yaziTuraAt() {
    let random = Math.random(); // 0-1

    if (random < 0.5) {
        console.log("yazi");
    }
    if (random > 0.5) {
        console.log("tura");
    }
    console.log(random);
}

yaziTuraAt();

// 4- kendisine gönderilen bir sayının yam bölenlerini dizi şeklinde döndüren fonksiyonu yaz

function tamBolenler(sayi) {
    let sayilar = [];

    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            sayilar.push(i);
        }
    }

    return sayilar;
}

console.log(tamBolenler(45));
console.log(tamBolenler(15));
console.log(tamBolenler(33));

// 5- değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız

function toplam() {
    let sonuc = 0;

    for (let i =0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }

    return sonuc;
}

console.log(toplam(2, 5));
console.log(toplam(2, 5, 7));