//Objects -20-

let user1 = ['zeynep', 'göksoy', 23];

//objelerin yapısı  dict ya da json yapısına benziyor

//key value pairs
let user = {
    'name': 'zeynep',
    'surname': 'göksoy',
    'age': 23,
    'address': { // obje içinde obje kullanabiliriz.
        'city': 'kocaeli',
        'region': 'gebze'
    },
    'hobiler': ['sinema','spor'] // obje ile dizileri iç içe de tanımlaabilirsin
}

let sonuc;

sonuc = user.name;
sonuc = user['age'];
sonuc = user.address.city;
sonuc = user.hobiler[1]; // kullanıcı objesi içindeki diziye erişim sağladık

userA = {
    'name': 'zeynep',
    'surname': 'göksoy',
    'age': 23,
    'address': { // obje içinde obje kullanabiliriz.
        'city': 'kocaeli',
        'region': 'gebze'
    },
    'hobiler': ['sinema','spor','dil'] // obje ile dizileri iç içe de tanımlaabilirsin
}
userB = {
    'name': 'ömer',
    'surname': 'göksoy',
    'age': 20,
    'address': { // obje içinde obje kullanabiliriz.
        'city': 'kocaeli',
        'region': 'gebze'
    },
    'hobiler': ['oyun','spor'] // obje ile dizileri iç içe de tanımlaabilirsin
}

let users = [
    userA,
    userB
];


let urunler = [ // dizi içinde obje tanımladık
    {
        'urun_adi': 'samsung s22',
        'urun_fiyat': 13000
    },
    {
        'urun_adi': 'samsung s23',
        'urun_fiyat': 15000
    }
];

sonuc = users[1].name;
sonuc = urunler;

//console.log(sonuc);

// Uygulama : Object -21- sipariş

let order1,order2;
order1 = {
    'order_id' : 101,
    'order_date' : '31.12.2022',
    'payment_method' : 'credit_card',
    'shipment_adress': {
        'neighbourhood': 'Yahya Kemal Mah.',
        'city': 'Kocaeli',
        'district': 'İzmit'
    },
    
    'ordered_products' : [
        {
            'product_id': 5,
            'product_name': 'Iphone 13 Pro',
            'product_price': 22000
        },
        {
            'product_id': 7,
            'product_name': 'Iphone 13 Pro Max',
            'product_price': 25000
        }
    ]
}

order2 = {
    'order_id' : 102,
    'order_date' : '14.12.2022',
    'payment_method' : 'cash',
    'shipment_adress': {
        'neighbourhood': 'Yahya Kemal Mah.',
        'city': 'İstanbul',
        'district': 'Maltepe'
    },
    
    'ordered_products' : [
        {
            'product_id': 7,
            'product_name': 'Iphone 13 Pro Max',
            'product_price': 25000
        }
    ]
}

let orders = [order1, order2];

let order1_amount = (order1.ordered_products[0].product_price + order1.ordered_products[1].product_price);
let order2_amount = (order2.ordered_products[0].product_price);

let total_amount = order1_amount + order2_amount;

console.log('order1 :' + order1_amount);
console.log('order2 :' + order2_amount);

console.log('total_amount : ' + total_amount);

// Döngüler -22-

let sayilar = [1, 2, 3, 4, 5, 7, 8, 9];
let toplam=0;
for (let i in sayilar) { // in ile diziye indeksle ulaşırız : i=indeks
    toplam+=sayilar[i]; 
}

for (let sayi of sayilar) { //of ile direkt dizi elemanlarına ulaşırız
    toplam += sayi;
}

let ogrenciler = [
    {'ad': 'zeynep', 'soyad':'göksoy','notlar':[70,80,90] },
    {'ad': 'alina', 'soyad':'kuralova','notlar':[70,80,90] },
    {'ad': 'ayşenur', 'soyad':'ocaklı','notlar':[70,80,90] }
];

for (let ogrenci of ogrenciler) {
    let not_toplam=0,ortalama=0,adet=0;
    for (let not of ogrenci.notlar){
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;
    //console.log(ortalama);
}
//metot : fonksiyon nesne üzerinden çağrılıyorsa buna metot denir
//fonksiyon : sadece fonksiyon çağrılır

//Fonksiyonlar -24-
//fonksiyon tanımlama : fonksiyonu küçük harfle tanımlıyoruz
//clasları büyük harfle tanımlarız
//{} arası fonksiyon kapsamı
function selamlama() {
    console.log('hellö world');
}
selamlama();

function yasHesapla(dogumYili) {
    return new Date().getFullYear()-dogumYili;
}

function emekliligeKacYilKaldi(dogumYili) {
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 55 - yas;
    
    if (kalan_sene>0) {
        console.log('emekli olmanıza kalan yıl : '+kalan_sene);
    } else {
        console.log('zaten emekli oldunuz');
    }
}
emekliligeKacYilKaldi(1998);

function ekranaYaz(msj,count) {
    for (let i = 0; i < count; i++){
        console.log(msj);
    }
}

ekranaYaz('You can do this !! you have a beautiful life ahead, dream big and work hard', 2);

function alanCevreHesapla(kisa,uzun) {
    let alan = kisa * uzun;
    let cevre = 2 * (kisa + uzun);
    console.log('alan:'+alan+' cevre:'+cevre)
}
alanCevreHesapla(4, 2);

function yaziTura() {
    let random = Math.random() * 10;
    console.log(random);
    random=Math.floor(random);
    if (random % 2 == 0){
        console.log('Yazi');
    }else{
        console.log('Tura');
    }
}
yaziTura();

//değişken sayıda parametre alan toplam isminde bir fonk

function topla(a,b,c) {
    return a+b+c;
}
console.log(topla(2, 5, 7));

function topla2() { // arguments kullanarak alınan parametre sayısını dinamik hale getirebiliyoruz
    //bu sayede kullanıcı anı fonksiyonu birden fazla parametre için kullanabilir
    //arguments key value pair şeklinde çalışır0
    //arguments js'de built-in object'dir
    let sonuc = 0;
    for (let i =0;i<arguments.length;i++){
        sonuc += arguments[i];
    }
    return sonuc;
}

console.log(topla2(1,2));
console.log(topla2(1, 2, 3, 4, 5));

//Scopes -26-

//if bloğu, for bloğu gibi bloklar da global kapsama giriyor
//ayrı bir kapsam oluşturmuyor.
//bu yüzden globalde tanımladığımız bir değişkeni aynı isimle if ya da for bloğu içinde
//tanımlarsak son tanımladığımız geçerli olur.

//Fonksiyonlar kendi scope alanlarını oluşturur.
//block içerisinde yeni bir scope oluşturmaz. (bu özelliği(scope) let ve const aracılığıyla sağlıyoruz).

