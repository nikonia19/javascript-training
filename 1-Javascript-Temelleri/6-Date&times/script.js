let simdi = new Date();

sonuc = simdi;
sonuc = simdi.getDate();        // gün
sonuc = simdi.getDay();         // 0:pazar 6:cumartesi
sonuc = simdi.getFullYear();    // yıl
sonuc = simdi.getHours();       // saat
sonuc = simdi.getTime();

simdi.setFullYear(2025);
simdi.setMonth(5);
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;
let saniye = saniye / 60;
let saniye = dakika / 60;
let saniye = saat / 24;

sonuc = gun;

console.log(typeof sonuc);
console.log(sonuc);