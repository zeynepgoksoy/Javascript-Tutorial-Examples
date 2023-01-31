//form oluşturacağız
//kullanıcı yanlış bilgi doldurursa kullanıcıya bildiriceğiz ve tarayıcı kısmında bu bilgileri düzelteceğiz ki
//hataları server'a boşuna taşımayalım

const form = document.getElementById('form');
const username = document.getElementById('usernmame');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

form.addEventListener('submit', function (e){
    e.preventDefault();//bilgilerin submit edilmesini engeller amacımız kullanıcının verdiği bilgileri check etnek
    
    if (username.value === '') {
        username.className='form-control error'
    }

});