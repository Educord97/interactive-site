//Carousel
var slideIndex = 0;
SlideShow();

function SlideShow() {
    var i = 0;
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 };

    slides[slideIndex - 1].style.display = "block";

    setTimeout(SlideShow, 20000);

}

//Change word function
let words = ["Magnific", "Best", "Easy"];
let wordsIndividual = 0;
setInterval(() => {
    document.getElementById("letter").innerHTML = words[wordsIndividual++]
    if (wordsIndividual === words.length) wordsIndividual = 0;

}, 20000);


//TypeWritter
let i = 0;
let txt = "The evolution of a simple developer is given by the insistence";

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("outputWritter").innerHTML += txt.charAt(i);
        i++;
    }/*else if(i === txt.length){
       txt.length
        i = 0;
    }*/
    setTimeout(typeWriter, 100);
}
window.onload = typeWriter;


//Page position
window.onscroll = () => {
    scrollF();
}
function scrollF(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop >500) {
        document.getElementById("arrowHome").style.color = "red";
    }else {
        document.getElementById("arrowHome").style.color = "yellow";
    }
    
}


//Responsive
function responsiveBtn() {
    let menu = document.getElementById("nav_responsive");
    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden"

    } else {
        menu.style.visibility = "visible";
    }
    
}

//Hide nav_responsive when sroll to down
var prevScroll = window.pageYOffset;
window.onscroll = function () {
    var currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {
        document.getElementById("btn_responsiveJS").style.top = "0";
        document.getElementById("nav_responsive").style.top = "0";
    } else {
        document.getElementById("btn_responsiveJS").style.top = "-100px";
        document.getElementById("nav_responsive").style.top = "-100px";
    }
    prevScroll = currentScroll;
}

//Video jQuery
/*$("#videoShow").click(function(){
    $("#videoframe").css("display", "block");
    $("#videoYoutube")[0].src += "?autoplay=1";
   });
*/
//Video Just Javascript
let video = document.getElementById("videoShow");
video.addEventListener("click", ()=>  {
    document.getElementById("videoframe").style.display = "block";
    document.getElementById("videoYoutube").src += "?autoplay=1";
})
    


