$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });

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

    setTimeout(SlideShow, 15000);
}

//Change word function
let words = ["Easy to recreate", "zoom effect with CSS", "A cool template"];
let wordsIndividual = 0;
setInterval(() => {
    document.getElementById("letter").innerHTML = words[wordsIndividual++]
    if (wordsIndividual === words.length) wordsIndividual = 0;
}, 15000);

//TypeWritter
let i = 0;
let txt = "The evolution of a simple developer is given by the insistence";
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("outputWritter").innerHTML += txt.charAt(i);
        i++;
    }
    setTimeout(typeWriter, 100);
}
window.onload = typeWriter;

//Page position
window.onscroll = () => {
    scrollLinks();
}
function scrollLinks(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("side").style.display = "none";
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
video.addEventListener("click", () => {
    document.getElementById("videoframe").style.display = "block";
    document.getElementById("videoYoutube").src += "?autoplay=1&mute=1";
})

//Modals box code
const modals = [];
const btns = [];
const closes = [];

closes[0] = document.getElementsByClassName("close")[0];
modals[0] = document.getElementById("modal_1");
btns[0] = document.getElementById("btnModalCode1");

closes[1] = document.getElementsByClassName("close_2")[0];
modals[1] = document.getElementById("modal_2");
btns[1] = document.getElementById("btnModalCode2");

closes[2] = document.getElementsByClassName("close_3")[0];
modals[2] = document.getElementById("modal_3");
btns[2] = document.getElementById("btnModalCode3");

closes[3] = document.getElementsByClassName("close_4")[0];
modals[3] = document.getElementById("modal_4");
btns[3] = document.getElementById("btnModalCode4");

closes[4] = document.getElementsByClassName("close_5")[0];
modals[4] = document.getElementById("modal_5");
btns[4] = document.getElementById("btnModalCode5");

closes[5] = document.getElementsByClassName("close_6")[0];
modals[5] = document.getElementById("modal_6");
btns[5] = document.getElementById("btnModalCode6");

closes[6] = document.getElementsByClassName("close_7")[0];
modals[6] = document.getElementById("modal_7");
btns[6] = document.getElementById("btnModalCode7");

closes[7] = document.getElementsByClassName("close_8")[0];
modals[7] = document.getElementById("modal_8");
btns[7] = document.getElementById("btnModalCode8");

closes[8] = document.getElementsByClassName("close_9")[0];
modals[8] = document.getElementById("modal_9");
btns[8] = document.getElementById("btnModalCode9");

closes[9] = document.getElementsByClassName("close_10")[0];
modals[9] = document.getElementById("modal_10");
btns[9] = document.getElementById("btnModalCode10");

closes[10] = document.getElementsByClassName("close_11")[0];
modals[10] = document.getElementById("modal_11");
btns[10] = document.getElementById("btnModalCode11");


btns[0].onclick = () => {
    modals[0].style.display = "flex";
}
closes[0].onclick = () => {
    modals[0].style.display = "none";
}

btns[1].onclick = () => {
    modals[1].style.display = "flex";
}
closes[1].onclick = () => {
    modals[1].style.display = "none";
}

btns[2].onclick = () => {
    modals[2].style.display = "flex";
}
closes[2].onclick = () => {
    modals[2].style.display = "none";
}

btns[3].onclick = () => {
    modals[3].style.display = "flex";
}
closes[3].onclick = () => {
    modals[3].style.display = "none";
}

btns[4].onclick = () => {
    modals[4].style.display = "flex";
}
closes[4].onclick = () => {
    modals[4].style.display = "none";
}

btns[5].onclick = () => {
    modals[5].style.display = "flex";
}
closes[5].onclick = () => {
    modals[5].style.display = "none";
}

btns[6].onclick = () => {
    modals[6].style.display = "flex";
}
closes[6].onclick = () => {
    modals[6].style.display = "none";
}

btns[7].onclick = () => {
    modals[7].style.display = "flex";
}
closes[7].onclick = () => {
    modals[7].style.display = "none";
}

btns[8].onclick = () => {
    modals[8].style.display = "flex";
}
closes[8].onclick = () => {
    modals[8].style.display = "none";
}

btns[9].onclick = () => {
    modals[9].style.display = "flex";
}
closes[9].onclick = () => {
    modals[9].style.display = "none";
}

btns[10].onclick = () => {
    modals[10].style.display = "flex";
}
closes[10].onclick = () => {
    modals[10].style.display = "none";
}

//Click outside of box modal too close the modal
window.onclick = function (event) {
    if (event.target == modals[0] || event.target == modals[1] || event.target == modals[2]
        || event.target == modals[3] || event.target == modals[4] || event.target == modals[5]
        || event.target == modals[6] || event.target == modals[7] || event.target == modals[8]
        || event.target == modals[9] || event.target == modals[10]) {
        modals[0].style.display = "none";
        modals[1].style.display = "none";
        modals[2].style.display = "none";
        modals[3].style.display = "none";
        modals[4].style.display = "none";
        modals[5].style.display = "none";
        modals[6].style.display = "none";
        modals[7].style.display = "none";
        modals[8].style.display = "none";
        modals[9].style.display = "none";
        modals[10].style.display = "none";

    }
}

//Contact
const user = document.getElementById("user");
const email = document.getElementById("email");
const textArea = document.getElementById("textareaJ");
const form = document.getElementById("form");
const errorElement = document.getElementById('error');
const success = document.getElementById('success');

form.addEventListener('submit', (e) => {
    let messages = []
    if (user.value === '' || user.value == null) {
        messages.push('Name is required!');
        errorElement.style.display = "flex";
    }

    if (email.value === "") {
        messages.push('Please, enter with your email!')
        errorElement.style.display = "flex";
    }

    if (textArea.value === "") {
        messages.push('What is your message?')
        errorElement.style.visibility = "visible";
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(`\n`);
    }

    if (user.value !== "" && email.value !== ""  && textArea.value !== "") {
        messages.push('Thasnks bro :)')
        success.style.display = "none";
    }
})

//Date
let date = new Date();
let year = date.getFullYear();
document.getElementById("date").innerHTML = year;