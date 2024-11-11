let box = document.querySelector('.burger__box')
let img = document.querySelector('.pp img')
let inpt =  document.querySelector('.search-form')
let burger = document.querySelector('.burger')
let toggleburger = ()=>{
    box.classList.toggle('active')
    img.classList.toggle('active')
    inpt.classList.toggle('active')
    burger.classList.toggle('active')
}