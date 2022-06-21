let toplam = 0;

for(let i = 0; i < 10; i++) {
    toplam += i; 
}

console.log(toplam);

let sayilar = [1,3,5,5,0,8];

let toplam0 = 0;

for (let i = 0; i < sayilar.length; i++) {
    toplam0 += sayilar[i];
}

console.log(toplam0);

let toplam1 = 0;
for (let i in sayilar) {
    toplam1 += sayilar[i];
}

console.log(toplam1);

let toplam2 = 0;
for (let sayi of sayilar) {
    toplam2 += sayi;
}

console.log(toplam2);

let user = {
    "name": "Furkan",
    "username": "Nikonia",
    "password": "123456",
    "email": "asdf@asdf.com"
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}