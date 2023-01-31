var urunAdi = "iphone 13";
let urunFİyat = 1500;

console.log(typeof urunAdi);
console.log(typeof urunFİyat);

let sayi1 = 10;
let sayi2 = 11;

console.log(Number(sayi1) + Number(sayi2));

var ogr1_ad = "Ada";
var ogr1_soyad = "Bilgi";
var ogr1_dogum = "2010";
var ogr1_matematik1 = 70;
var ogr1_matematik2 = 80;
var ogr1_ort = (ogr1_matematik1 + ogr1_matematik2) / 2;
console.log(parseFloat(ogr1_ort));
console.log(ogr1_ort >= 50);
 
let suankiYil = new Date().getFullYear();
let ogr1_yas = 2022 - parseInt(ogr1_dogum);
console.log(ogr1_yas);


// IF-ELSE BLOK ÖRNEK

let sayi = 11;

if (sayi > 0 && sayi % 2 == 1) {
    console.log("sayi tektir.");
}

let ad = "zeynep";
let soyad ="göksoy" ;
let yas ="23" ;
let sehir = "Amsterdam";

let mesaj = "Benim adım " + ad + " " + soyad + " . Yaşım " + yas + "." + sehir + "\'a bu yaz gideceğim ve beğenirsem ileride orada yaşayacağım.";

console.log(mesaj);

//backtick : alt gr + noktalı virgül tuşu 

mesaj = `Benim adım ${ad} ve soyadım ${soyad}. Bu yaz  ${sehir}'a gideceğim .${yas} yaş planım bu`;
console.log(mesaj);

let suankiYil= new Date().getFullYear();
let kalan_yil = 2024 - suankiYil;
console.log(kalan_yil);

//ternary operators ?

let emeklilik = (55 - yas > 0) ? 'Emekliliğe ' +(55-yas)+' yıl kaldı.' : 'Zaten emekli oldunuz.';
console.log(emeklilik);


// String işlemleri- 13 -

let kursAdi = '  .  Komple Uygulamalı Web Gelistirme';
let sonuc;

sonuc = kursAdi.toLowerCase(); // String sınıfı içinde metot
sonuc = kursAdi.length; // String sınıfı içinde property
sonuc = kursAdi[5];

sonuc = kursAdi.slice(7, 15); // başlangıç indeksinden bitiş indeksine kadar(bitiş dahil değil) olan harf öbeğini döndürüyor
sonuc = kursAdi.slice(10); // bitiş belirtilmediği için string sonuna kadar alır
sonuc = kursAdi.slice(-10); // negatif indeks
sonuc = kursAdi.slice(-17, -10);

sonuc = kursAdi.substring(3, 15);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace('Web', 'mobil'); //kalıcı olarak değiştirmiyor

sonuc = kursAdi.trim(); // başlangiç ve sondaki boşlukları siler
sonuc = kursAdi.trimEnd();//sondakinisiler
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf('Web');
sonuc = kursAdi.split(' '); // boşluğa göre ayırıp dizi döndürüyor
sonuc = kursAdi.split(' ')[5];
console.log(sonuc);

// String Uygulama -14-

let url = 'https://www.sadikturan.com';
let kursAdi = 'Komple Web Gelistirme Kursu';

//url kaç karakter
console.log(url.length);

//kurs adi kaç karakterden olusuyor
console.log(kursAdi.split(' ').length);

// url hhtps ile mi basliyor
console.log(url.search('https')); //search o kelime varsa başladığı indeksi döndürüyor yoksa -1 döndürüyor
//ya da 
let sonuc;
sonuc = url.startsWith('https');
if (sonuc) {
    console.log('evet https ile basliyor');
}

// url ve kursAdini birleştirerek yeni bir url yap

let kursAdiLower = kursAdi.toLowerCase();
let kursAdiYeni = kursAdiLower.replaceAll(' ', '-');
kursAdiYeni = kursAdiYeni.replace('ş','s').replace('ı','i'); //url'de türkçe karakter olmayacağı için değişim yaptık
//sonuc = url.concat(url, kursAdiYeni);
sonuc = `${url}/${kursAdiYeni}`;
console.log(sonuc);

// Numbers -15-

let sonuc;

sonuc = '10';
sonuc = Number('10'); //constructor
sonuc = parseFloat('10.7');
sonuc = parseInt('10a');

sonuc = isNaN('10a'); //isNaN not a number mı diye kontrol ediyor.

let sayi = 15.12345978;
sonuc = sayi.toPrecision(5); // ondalık da dahil totalde 5 basamaklı sayıyı alır
sonuc = sayi.toFixed(5);//ondaklıklı kısmı fixler ve yuvarlama yapar

sonuc = Math.round(2.4); //Math interface'inden metoda ulaşırız
sonuc = Math.ceil(2.4); //Math interface'inden metoda ulaşırız
sonuc = Math.floor(2.4); //Math interface'inden metoda ulaşırız

//console.log(typeof sonuc);
//console.log(sonuc);

//Dates -On ALtı-
let simdi = new Date(); //şimdiki tarih-zaman

//get methods
sonuc = simdi;
sonuc = simdi.getDate(); //gün
sonuc = simdi.getDay(); // 0: pazar altı:cumartesi

//set methods
simdi.setFullYear(2023);
simdi.setMonth(11); // 0:ocak - 11:aralık
simdi.setDate(14);

sonuc = simdi;
//console.log(typeof sonuc);
//console.log(sonuc);

let urunler = ['iphone 12', 'iphone 13', 'iphone 13 pro'];
let fiyatlar = [9000, 12000, 20000];
// for (index = 0; index < 3; index++){
//     console.log(`${urunler[index]}-${fiyatlar[index]}`);    
// }

let urun1 = ['iphone 12', 9000, ['siyah', 'beyaz', 'gold']];// dizi tanımı böyle de olabilir

// console.log(typeof urun1);
// console.log(urun1);
// console.log(urun1[2][1]);

// Dizi Metotları -18-

let ogrenciler = ['çınar', 'yiğit', 'ada'];
sonuc = ogrenciler.length;

//array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(' '); // araya konulan karakter ile dizi elemanlarını birleştiriyor

//eleman silme
//sonuc = ogrenciler.pop(); // stackdeki gibi pop işlemini yapar ve öğrencilerden de siler
//sonuc = ogrenciler.shift(); //ilk eleman silinir

//eleman ekleme
sonuc = ogrenciler.push('sena');
sonuc = ogrenciler.unshift('semra'); //dizinin başına eleman ekler


console.log(ogrenciler);
console.log(typeof ogrenciler);

console.log(sonuc);
console.log(typeof sonuc);

let marka1 = ['mazda', 'toyota'];
let marka2 = ['opel', 'renault'];
let marka3 = ['mercedes'];

sonuc = marka1.concat(marka2, marka3);
sonuc = marka1.splice(0, 1, marka2); //splice metodu ile hem silme hem ekleme yapabiliyoruz
//splice metodu silinen dizi elemanını döndürüyor.
//splice(start_index, deleteCount, array) ilk parametre başlangıç indeksini veriyor
//ikinci parametre kaç eleman sileceğimizi veriyor
//üçüncü parametre ekleyeceğimiz diziyi veriyor 


console.log(sonuc);
console.log(marka1);