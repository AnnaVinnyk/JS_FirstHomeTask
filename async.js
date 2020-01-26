console.log("Привет, мир!");

//массив ссылок к фотографиям
var Photos = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'];

alert('Привет, Артём! ;)');
alert('Смотри фокус! Не было фотографий...');
for (let i = 0; i < 12; i++) {
    function img(i) {
        //alert('Сейчас загрузится изображение с номером ' + String(i + 1));
        var img = document.createElement('img');
        img.setAttribute('src', Photos[i]);
        img.setAttribute('alt', 'Фото №' + String(i + 1));
        img.setAttribute('width', '100px');
        img.setAttribute('style', 'padding: 5px');
        document.getElementById('photos').appendChild(img);
    }
    setTimeout(img(i), 5000);
}
alert('...Появились фотографии!');

/*function changeDiv() {
        //alert('Сейчас блок HEADER поменяет цвет на синий, граница будет зелёной, а текст оранжевый')
        let divItem = document.getElementById("head");
        divItem.setAttribute(
            "style",
            "background-color: #0047a3; border: 1px solid #3abb01; color: #ff7c00;"
        );
    }
setTimeout(changeDiv(), 5000);*/



