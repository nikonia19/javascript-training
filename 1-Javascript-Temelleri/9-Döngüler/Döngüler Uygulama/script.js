let sayilar = [1,5,8,15,3,26];

// 1- sayilar listesindeki her bir elemanın karesini yazdır.

for (let sayi of sayilar) {
    console.log(sayi * sayi);
}

// --------- //

// 2- sayilar listesindeki hangi sayılar 5'in katıdır?

for (let i = 0; i < sayilar.length; i++) {
    if (sayilar[i] % 5 == 0) {
        console.log(sayilar[i]);
    }
}

// --------- //

// 3- sayılar listesindeki çift sayıların toplamını bul.

let toplam = 0;

for (let i in sayilar) {
    if (sayilar[i] % 2 == 0) {
        toplam += sayilar[i];
    }
}
console.log(toplam);

// ---------------------------------------------- //

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdır

for (let urun of urunler) {
    console.log(urun.toUpperCase());
}

// --------- //

// 5- urunler listesinde içinde samsung geçen kaç ürün var?

let adet = 0;

for (let urun of urunler) {
    if (urun.includes("samsung")) {
        adet++;
    }
}

console.log(adet);

// ---------------------------------------------- //

let ogrenciler = [
    {"ad": "furkan", "soyad": "söğütcü", "notlar": [60,70]},
    {"ad": "murat", "soyad": "çetin", "notlar": [50,80]},
    {"ad": "batuhan", "soyad": "köstek", "notlar": [70,90]}
];

// 6- ogrenciler listesindeki her öprencinin not ortalaması ve başarı durumunu hesapla 

for (let ogrenci of ogrenciler) {
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
    for (let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması : ${ortalama}.`);

    if (ortalama >= 50) {
        console.log("başarılı");
    } else {
        console.log("başarısız");
    }
}

// --------- //

// 7- tüm öğrencilerin not ortalaması kaçtır?

