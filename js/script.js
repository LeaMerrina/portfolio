
function SeeMore() {
    
    document.querySelector("header").classList.toggle("openNav");
};

document.addEventListener("DOMContentLoaded",function(){


    document.getElementById("burger").onclick = function() {SeeMore()};

var text = document.getElementById('title');
var splitText = acAnimated.Plugins.SplitText(text, {words: 1, chars: 1, spacing: 40});



const myFunction = () => {

var tl = gsap.timeline({onComplete: myFunction});
for (var i=0; i<=5; i++) {  

	var char = splitText.chars[gsap.utils.random(0, 28,1)];
    tl.fromTo(char,0.5,{color:'#ff0000'},{color:'#000000'},'-=0.4');

};

tl.resume();


}

myFunction();







    setTimeout(() => {   
    let tt =document.querySelector("header").offsetHeight+'px';
    document.documentElement.style.setProperty('--navHeight', tt);
}, "1000")
});

