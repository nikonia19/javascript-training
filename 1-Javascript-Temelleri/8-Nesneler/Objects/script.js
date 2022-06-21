let kullaniciA = {
    "ad": "Furkan",
    "soyad": "Söğütcü",
    "yas": 21,
    "adres": {
        "sehir": "Samsun",
        "ilce": "İlkadım"
    },
    "hobiler": ["sinema", "spor"]
}

let kullaniciB = {
    "ad": "Eren",
    "soyad": "Bekmezci",
    "yas": 21,
    "adres": {
        "sehir": "Zonguldak",
        "ilce": "Devrek"
    },
    "hobiler": ["sinema", "spor"]
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciA.hobiler[1];

let kullanicilar = [
    kullaniciA,
    kullaniciB
];

sonuc = kullanicilar[1].ad;

let urunler = [
    {
        "urun_adi": "samsung s22",
        "urun_fiyati": 15000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyati": 17000
    }
]

sonuc = urunler[0].urun_adi;

console.log(sonuc);