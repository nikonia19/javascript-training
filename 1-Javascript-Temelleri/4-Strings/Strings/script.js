let ad = "Furkan";
let soyad = "Sogutcu";
let yas = 21;
let sehir = "Samsun";

let mesaj = "Benim adim" + ad + 've soyadim' + soyad + '. ' + sehir + '\'de yasiyorum.' + 'Emeklilige ' + (65 - yas) + 'yilim kaldi.';

//backtick
mesaj = `Benim adim ${ad} ve soyadim ${soyad}. ${sehir}'da yasiyorum. Emekllige ${65 - yas} yil kaldi.`;

//ternary operators
let emeklilik = (65 - yas > 0) ? "Emeklilige " + (65 - yas) + " yil kaldi." : "Zaten emekli oldunuz.";
mesaj = `Benim adim ${ad} ve soyadim ${sehir}'da yasiyorum. ${emeklilik}`;

console.log(mesaj);