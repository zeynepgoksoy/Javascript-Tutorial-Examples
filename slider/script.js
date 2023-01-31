var models = [
    {
        name: 'Bmw 418d',
        image: 'img/bmw.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },{
        name: 'Volvo S0',
        image: 'img/volvo.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },{
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },{
        name: 'Honda',
        image: 'img/honda.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    }
];
var index = 3;
var slideCount = models.length;//elimizdeki image dosyasındaki resim sayısı kadar eleman var ve maks o kadar ilerleyebiliriz
//click olayı oluşturuyoruz
var interval;
var settngs = { 
    duration : '500000',
    random: false    
};

init(index);


document.querySelector('.fa-solid fa-arrow-left').addEventListener
    ('click', function () {
        index--;
        showSlide(index);
        console.log(index);
});
document.querySelector('.fa-solid fa-arrow-right').addEventListener
    ('click', function () {      
        index++;
        showSlide(index);
        console.log(index);
});
document.querySelectorAll('.arrow').forEach(function (item){
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })    
})
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
})
function init(settings) {
    //setTimeout : verilen zaman kadar bekleyip bir kez çalışıp duruyor
    var prev;
    interval=setInterval(function () { //setInterval,clearInterval görene kadar çalışır
        if (settings.random) {
            //random index
            do { 
                index=Math.floor(Math.random()*slideCount);               
            } while (index == prev)
            prev=index;
        }
        else {
            //artan index
            if (slideCount == index + 1) {
                index=-1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        console.log(index);
    },settings.duration)
}

function showSlide(i) {
    //Cannot read property 'addEventListener' of null alıyorsak script JS dosyası HTML'den önce açılıyor demek o yüzden script dosyasının body etiketinden sonra koy
    if (i < 0) {
        index=slideCount-1;
    }
    if (i>= slideCount) {
        index=0;
    }
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}


