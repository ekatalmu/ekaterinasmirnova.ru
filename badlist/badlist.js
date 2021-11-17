'use strict';

let ymmv = document.querySelector('.badlist__ymmv');
let button = document.querySelector('.badlist__button');
let badSites = document.querySelector('.badlist__orig');

ymmv.addEventListener('mouseenter', function(event){
  event.target.innerText = 'Формальное предупреждение о том, что кампания кампании рознь, и вы, возможно, отключаете потенциально эффективные для себя ресурсы';
  event.target.style.fontSize = "12px";
});

ymmv.addEventListener('mouseleave', function(event){
  event.target.innerText = 'YMMV';
  event.target.style.fontSize = "12px";
});

button.addEventListener('click', function(event){
  navigator.clipboard.writeText(badSites.innerText);
  event.target.innerText = "Скопировано!";
  event.target.style.color = "white";
  event.target.style.backgroundColor = "darkgray";
  event.target.style.transition = "0s"; 
  badSites.style.color ="darkgray";
  badSites.style.transition ="1s";
});




