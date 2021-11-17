'use strict';

let input = document.querySelector('.caser__orig');
let resultUpper = document.querySelector('.caser__upper');
let resultLower = document.querySelector('.caser__lower');
let button = document.querySelector('.caser__button');
let buttonCopyUpper = document.querySelector('.caser__upper__button');
let buttonCopyLower = document.querySelector('.caser__lower__button');

function toUpper(text){
  return text.toUpperCase();
}; //функция трансформирует введенный текст в верхний регистр

function toLower(text){
  return text.toLowerCase();
}; //функция трансформирует введенный текст в нижний регистр

button.addEventListener('click', (event) =>{
  resultUpper.textContent = toUpper(input.value);  
  resultLower.textContent = toLower(input.value);
}); //по клику на кнопку "щелкните сюда" поля результатов 
// заполняются введенным текстом верхнего и нижнего регистров, соответственно


buttonCopyUpper.addEventListener('click', function(event){
  navigator.clipboard.writeText(resultUpper.innerHTML);
  event.target.innerText = "Адреса столбиком cкопированы";
  event.target.style.color = "white";
  event.target.style.backgroundColor = "#9dafaf";
  event.target.style.transition = "0s"; 
  resultUpper.style.color ="#9dafaf";
  resultUpper.style.transition ="1s";
});

buttonCopyLower.addEventListener('click', function(event){
  navigator.clipboard.writeText(resultLower.innerHTML);
  event.target.innerText = "Адреса столбиком cкопированы";
  event.target.style.color = "white";
  event.target.style.backgroundColor = "#9dafaf";
  event.target.style.transition = "0s"; 
  resultLower.style.color ="#9dafaf";
  resultLower.style.transition ="1s";
});