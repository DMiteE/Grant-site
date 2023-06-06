window.addEventListener("scroll", function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', this.window.scrollY > 0);
});


function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [52.61653510734731,39.534916969649224],
        zoom: 17
    });

    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
  
}
ymaps.ready(init);