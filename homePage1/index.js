//DOM selections of main components in the website
let plane = document.querySelector('.plane');
let travel = document.querySelector(".travel");
let about = document.querySelector(".about");
let game = document.querySelector(".game");
let website1 = document.querySelector(".website1");
let website2 = document.querySelector(".website2");
let website3 = document.querySelector(".website3");


//functions to call animations plane launches to different planet
function goPlanet1() {
    plane.style.animation="rise 200ms";
    plane.style.animation="launchPlanet1 1000ms";   
    plane.addEventListener("animationend", goOtherWeb);  
}
function goPlanet2() {
    plane.style.animation = "launchPlanet2 1000ms";
    plane.addEventListener("animationend", goOtherWeb2); 
}
function goPlanet3() {
    plane.style.animation = "launchPlanet3 1000ms";
    plane.addEventListener("animationend", goOtherWeb3); 
}

//functions to calling different websites
function goOtherWeb() {
    window.location.href = "#about";
}
function goOtherWeb2() {
    window.location.href = "/homePage1/travel/travel.html";
}
function goOtherWeb3() {
    window.location.href = "#game";
}
          
//main clicking response waiting center from main Homepage
   
    // plane.style.animation = "wonderingPlane 2000ms";
    
    about.addEventListener('click', goPlanet1);
    travel.addEventListener('click', goPlanet2);
    game.addEventListener('click', goPlanet3);

// website1.addEventListener('click', movePlane); 
// website2.addEventListener('click', movePlane); 
// website3.addEventListener('click', movePlane); 

//window reload the browser whenever the size of the screen changes
window.addEventListener('resize', function () {
    "use strict";
    window.location.reload();
});

//finding the top left corner of the .plane location
let pdiv = document.querySelector('.plane');       
let prect = pdiv.getBoundingClientRect();
let px = prect.left;
let py = prect.top;

//fiding the top left corner of different planet in various responsive screen sizes
//and setting and sending CSS variables containing locations data of different planets
let div = document.querySelector('.about');
let rect = div.getBoundingClientRect();
let x = rect.left - px - 30 +'px';
let y = rect.top - py - 30 +'px';

document.documentElement.style.setProperty(`--targetX`, x );
document.documentElement.style.setProperty(`--targetY`, y );
        
//.travel
let div1 = document.querySelector('.travel');
let rect1 = div1.getBoundingClientRect();
let a = rect1.left - px + 80 + 'px';
let b = rect1.top - py + 'px';

document.documentElement.style.setProperty(`--targetA`, a);
document.documentElement.style.setProperty(`--targetB`, b);

//.game
let div2 = document.querySelector('.game');
let rect2 = div2.getBoundingClientRect();
let c = rect2.left - px - 30 + 'px';
let d = rect2.top - py -30 + 'px';

document.documentElement.style.setProperty(`--targetC`, c);
document.documentElement.style.setProperty(`--targetD`, d);