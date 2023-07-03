const hamburger = document.querySelector(".hamburger"),
      menu = document.querySelector(".header__menu");
const center = [52.61653510734731,39.534916969649224];


hamburger.addEventListener("click" , () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: center,
        zoom: 17
    });
    let placemark = new ymaps.Placemark(center
        ,{
            balloonContent: `
            
            <div class="balloon"›
                <div class="balloon address"›г.Липецк,Поперечный проезд 11А‹/div›
                <div class="balloon_ contacts"›
                <a href="tel: +7 (4742) 50-52-52"›+7 (4742) 50-52-52</a> 
                </div>
            </div>
            `
        },{
    })

    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('rulerControl'); // удаляем контрол правил


    myMap.geoObjects.add(placemark);
  
}
ymaps.ready(init);
