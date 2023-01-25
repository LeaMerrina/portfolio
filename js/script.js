function SeeMore() {
  document.querySelector("header").classList.toggle("openNav");
}

function randomPositionCarre() {
    let go = {onComplete: randomPositionCarre, ease: "power2.inOut"};
    go.x= gsap.utils.random(-20, 450, 1)
    go.y= gsap.utils.random(-20, 450, 1)
    gsap.to('#carre', 2, go);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").onclick = function () {
    SeeMore();
  };

  document.getElementById('show-more').onclick = function(e) {
    e.currentTarget.parentNode.classList.toggle('openExplication');
    console.log('ok',e.currentTarget.parentNode);
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

  setTimeout(() => {
    let tt = document.querySelector("header").offsetHeight + "px";
    document.documentElement.style.setProperty("--navHeight", tt);
  }, "1000");
});
