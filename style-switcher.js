const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*=========================================================================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}
/*=========================================================================*/
const morning = document.getElementById("logo-morning");
const night = document.getElementById("logo-night");
const dayNight = document.querySelector(".day-night");
const myDiv = document.getElementById('iimm');
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
    if(morning.style.display === 'none'){
        morning.style.display = 'block'
        night.style.display = 'none';
        myDiv.style.boxShadow = '6px 7px 19px 6px rgba(0, 0, 0, 0.582)';
    }else{
        morning.style.display = 'none'
        night.style.display = 'block';
        myDiv.style.boxShadow = '0px 0px 15px 2px rgba(255, 255, 255, 0.582)';
    }
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})
