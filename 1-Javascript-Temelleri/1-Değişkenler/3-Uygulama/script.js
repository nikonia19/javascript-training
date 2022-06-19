let ogr1_ad = "Furkan";
let ogr1_soyad = "Söğütcü";
let ogr1_dogumTarihi = "2010";
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;
let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3);
console.log(parseFloat(ogr1_ortalama));
console.log(ogr1_ortalama >= 50);

let ogr2_ad = "İbrahim";
let ogr2_soyad = "Söğütcü";
let ogr2_dogumTarihi = "2012";
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;
let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3);
console.log(parseFloat(ogr2_ortalama));
console.log(ogr2_ortalama >= 50);

let suankiYil = new Date().getUTCFullYear();

let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi);
let ogr2_yas = suankiYil - parseInt(ogr2_dogumTarihi);
console.log(ogr2_yas);

