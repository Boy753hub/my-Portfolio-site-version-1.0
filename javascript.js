
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
