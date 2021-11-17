//'use strict'

let img = document.querySelector('img');
let width = window.innerWidth;
let height = window.innerHeight;




document.addEventListener('mousemove', (event) => {
    if (event.target.classList.contains('img')){
        img.setAttribute('src', 'img/base.png');
    }else if(event.clientX > width/5 && event.clientY < height/3){
        img.setAttribute('src', 'img/topright.png');
    }else if(event.clientX > width/5 && (event.clientY >= height/3 && event.clientY < height/3*2)){
        img.setAttribute('src', 'img/right.png');
    }else if(event.clientX > width/5 && event.clientY >= height/3*2 ){
        img.setAttribute('src', 'img/bottomright.png');
    }else if((event.clientX <= width/5 && event.clientX > width/100*5) && event.clientY < height/2){
        img.setAttribute('src', 'img/top.png');
    }else if((event.clientX <= width/5 && event.clientX > width/100*5) && event.clientY > height/3*2){
        img.setAttribute('src', 'img/bottom.png');
    }else if(event.clientX <= width/100*5 && event.clientY > height/3*2){
        img.setAttribute('src', 'img/bottomleft.png');
    }else if(event.clientX <= width/100*5 && event.clientY < height/2){
        img.setAttribute('src', 'img/topleft.png');
    }else if(event.clientX <= width/100*5 && (event.clientY > (100 + height/2) && event.clientY <= height/4*3)){
        img.setAttribute('src', 'img/left.png');
    };
});




