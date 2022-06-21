var isim = "Ahmet"; // global scope
const adres = "Samsun";

function yazdir() {
    var isim = "Ayşe";
    var yas = 20;
    console.log("function scope: ", isim, yas);
}

yazdir();

console.log(isim);

if (true) {
    let cinsiyet = "Kadın";
    let ad = "Zeynep";
    console.log(ad, cinsiyet);
}

console.log(ad);

// var ile tanımlanan değişkenler bulunduğu yerde geçerlidir
// let ile const için geçerli değildir

// fonksiyonlar kendi scope alanlarını oluşturur.
// block içerisinde yeni bir scope oluşmaz (let, const)