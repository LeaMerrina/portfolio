
function randomPositionCarre() {
  let go = { onComplete: randomPositionCarre, ease: "power2.inOut" };
  go.x = gsap.utils.random(-20, 450, 1);
  go.y = gsap.utils.random(-20, 450, 1);
  gsap.to("#carre", 2, go);
}




document.addEventListener("DOMContentLoaded", function () {

  const bulletCount = document.querySelectorAll('.glide__slide').length;

  function generateBullets() {
    const bulletWrapper = document.getElementById('glide__bullets');

    for (let i = 0; i < bulletCount; i++) {
      const button = document.createElement('button');
      button.className = 'glide__bullet';
      button.setAttribute("data-glide-dir", '='+i);
  
      bulletWrapper.appendChild(button)
    }
  }
  
  generateBullets();

let windowsWidth = 0;
let sliderIsDestroy = true;
let slider = null;
const sliderSettings = {
  type: 'carousel',
  startAt:1,
  perView: 3,
  breakpoints: {
    800: {
      perView: 2
    },
    500: {
      perView: 1,
      autoPlay:2000
    }
  }};

function onResize() {

  windowsWidth = window.innerWidth;
  if(windowsWidth < 800){

    if(sliderIsDestroy){
      slider = new Glide('.glide', sliderSettings);
      slider.mount();
      sliderIsDestroy = false;
      document.getElementsByClassName('container-slider')[0].classList.toggle("is-not-mount");
    }

  }else{


    if(sliderIsDestroy == false){
      slider.destroy();
      sliderIsDestroy = true;
      document.getElementsByClassName('container-slider')[0].classList.toggle("is-not-mount");
    }


  }

}

window.onresize = onResize;



  onResize();



  const showMoreList = document.getElementsByClassName("show-more")
  for (let i = 0; i < showMoreList.length; i++) {
    const element = showMoreList[i];
    element.onclick = function (e) {
      e.currentTarget.parentNode.classList.toggle("openExplication");
    };
  }





  const text = document.getElementById("title");
  const jsPadding = Math.round(window.innerWidth / 48);
  const splitText = acAnimated.Plugins.SplitText(text, {
    words: 1,
    chars: 1,
    spacing: jsPadding,
  });

  const colorText = () => {
    var tl = gsap.timeline({ onComplete: colorText });
    for (var i = 0; i <= 5; i++) {
      var char = splitText.chars[gsap.utils.random(0, 27, 1)];
      tl.fromTo(char, 0.5, { color: "#ff0000" }, { color: "#000000" }, "-=0.4");
    }

    tl.resume();
  };

  colorText();
  randomPositionCarre();


});
