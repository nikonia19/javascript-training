// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

let sayi1 = 19;

if(sayi1 > 10 && sayi1 < 50) {
    console.log("sayi 10-50 arasinda.");
} else {
    console.log("sayi 10-50 arasinda degil.");
}

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

let sayi2 = 19;

if(sayi2 % 2 == 1 && sayi2 > 0) {
    console.log("sayi pozitif tek sayidir.");
} else {
    console.log("sayi pozitif tek saiy degil.");
}

// 3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız.

let x = 15;
let y = 25;
let z = 20;

if(x > y && x > z) {
    console.log("x en buyuktur.");
} else if (y > x && y > z) {
    console.log("y en buyuktur.");
} else if (z > x && z > y) {
    console.log("z en buyuktur.");
} else {
    console.log("sayilar esit.");
}

// 4- 2 vize(%40) ve 1 final(%60) notuna göre hesaplanan ortalama için;
    // a- Eğer ortalama 50 ve üstünde ise geçti değilse kaldı yazınız.
    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır. 
    // c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin.

let vize1 = 10;
let vize2 = 10;
let final = 70;
let ortalama = vize1*20/100 + vize2*20/100 + final*60/100;

if (final >= 70) {
    console.log("GECTI");
} else if (50 <= final < 70) {
    if (ortalama > 50) {
        console.log("GECTI");
    } else {
        console.log("KALDI");
    }
} else {
    console.log("KALDI");
}