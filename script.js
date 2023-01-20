document.getElementById("burger").onclick = function() {SeeMore()};
function SeeMore() {
    
    document.querySelector("header").classList.toggle("openNav");
};

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(() => {   
    let tt =document.querySelector("header").offsetHeight+'px';
    document.documentElement.style.setProperty('--navHeight', tt);
}, "1000")
});