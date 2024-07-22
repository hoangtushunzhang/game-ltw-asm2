import { gameList } from "./gameList.js";

export function gameSlider({title, list, parentElement}) {
  const gameslider = document.createElement("div");
  gameslider.innerHTML=
  `
  <div>
    <h5><b>${title}</b></h5>
    <div>
      <button id="left_btn"><i class="fa-solid fa-angle-left"></i></button>
      <button id="right_btn"><i class="fa-solid fa-angle-right"></i></button>
    </div>
  </div>
  `
  gameslider.className="gameslider"
  const gamelist = document.createElement('div')
  gameList(list,gamelist, 1)
  gamelist.className="carousel"
  gameslider.appendChild(gamelist);
  parentElement.appendChild(gameslider)

  $(gameslider).ready(function(){
    $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false
    });
    
    // Button event handlers
    $('#left_btn').click(function() {
      $('.carousel').slick('slickPrev');
    });

    $('#right_btn').click(function() {
      $('.carousel').slick('slickNext');
    });
  });

  
}

