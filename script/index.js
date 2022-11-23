const buttonHero = document.getElementById("hero-button")
buttonHero.addEventListener("click",(e)=>{
    window.confirm("You Buyying")
    console.log(e);
})

const buttonFeature1 = document.getElementById("feature1")
const square = document.getElementById("square")
buttonFeature1.addEventListener("click",(e)=>{
    square.classList.toggle("animated")
    square.classList.toggle("bounce")
})

const buttonFeature2 = document.getElementById("feature2")
const amongus = document.getElementById("amongus")
buttonFeature2.addEventListener("click",(e)=>{
    amongus.classList.toggle("animated")
    amongus.classList.toggle("bounce")
})

const buttonFeature3 = document.getElementById("feature3")
const circle = document.getElementById("circle")
buttonFeature3.addEventListener("click",(e)=>{
    circle.classList.toggle("animated")
    circle.classList.toggle("bounce")
})