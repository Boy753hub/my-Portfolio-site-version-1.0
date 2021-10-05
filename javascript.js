
const email = document.querySelector('#icon5');

email.addEventListener('click', ()=>{
    alert("boy753123@gmail.com")
})

let button = document.querySelector('#feris-mcvleli-gilaki')
let buttondiv = document.querySelector('.buttondiv')
let html = document.querySelector('html')
let modzraviwarwera = document.querySelector('.modzraviwarwera')


button.addEventListener('click' ,()=> {
    
    buttondiv.classList.toggle('active')
    html.classList.toggle('active')
    modzraviwarwera.classList.toggle('active')
})

let slideposition = 0;
const slides = document.getElementsByClassName('carousel_item')
const totalslides = slides.length

document.
    getElementById('carousel__button__next')
    .addEventListener('click' , function(){
        movetonextslide()
    })

document.
    getElementById('carousel__button__prev')
    .addEventListener('click' , function(){
        movetoprevslide()
    }) 
    
    
function updateslideposition() {
    for (let slide of slides) {
        slide.classList.remove('carousel_item_visible')
        slide.classList.add('carousel__item__hidden')
    }

    slides[slideposition].classList.add('carousel_item_visible')
}

function movetonextslide() {
    if (slideposition === totalslides -1) {
        slideposition = 0
    } else {
        slideposition++
    }
    updateslideposition()
}

function movetoprevslide() { 
    if (slideposition === 0) {
        slideposition = totalslides - 1
    } else {
        slideposition--
    }
    updateslideposition()
}


function showDiv(select){
    
    if(select.value==0){
        document.getElementById('jquery_link').style.display = "block";
    } else{
        document.getElementById('jquery_link').style.display = "none";
    }
    if(select.value==1){
        document.getElementById('javascript_link').style.display = "block";
    } else{
        document.getElementById('javascript_link').style.display = "none";
    }
    
    if(select.value==2){
        document.getElementById('web_design_link').style.display = "block";
    } else{
        document.getElementById('web_design_link').style.display = "none";
    }
    if(select.value==3){
        document.getElementById('UX_links').style.display = "block";
    } else{
        document.getElementById('UX_links').style.display = "none";
    }
}



var zoomImg = function () {
    // (A) CREATE EVIL IMAGE CLONE
    var clone = this.cloneNode();
    clone.classList.remove("zoomD");
  
    // (B) PUT EVIL CLONE INTO LIGHTBOX
    var lb = document.getElementById("lb-img");
    lb.innerHTML = "";
    lb.appendChild(clone);
  
    // (C) SHOW LIGHTBOX
    lb = document.getElementById("lb-back");
    lb.classList.add("show");
  };
  
  window.addEventListener("load", function(){
    // (D) ATTACH ON CLICK EVENTS TO ALL .ZOOMD IMAGES
    var images = document.getElementsByClassName("zoomD");
    if (images.length>0) {
      for (var img of images) {
        img.addEventListener("click", zoomImg);
      }
    }
  
    // (E) CLICK EVENT TO HIDE THE LIGHTBOX
    document.getElementById("lb-back").addEventListener("click", function(){
      this.classList.remove("show");
    })
  });