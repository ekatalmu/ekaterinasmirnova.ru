'use strict';

let input = document.querySelector('.emailer__orig');
let resultColumn = document.querySelector('.emailer__column');
let resultRow = document.querySelector('.emailer__list');
let button = document.querySelector('.emailer__button');
let buttonCopyColumn = document.querySelector('.copy-button__column');
let buttonCopyRow = document.querySelector('.copy-button__row');

function extractEmails(text){
  return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
}; //регулярное выражение, извлекающее email адреса

button.addEventListener('click', (event) =>{
  resultColumn.textContent = extractEmails(input.value).join('\n');
  resultRow.textContent = extractEmails(input.value).join(', ');
});

buttonCopyColumn.addEventListener('click', function(event){
  navigator.clipboard.writeText(resultColumn.innerHTML);
  event.target.innerText = "Адреса столбиком cкопированы";
  event.target.style.color = "white";
  event.target.style.backgroundColor = "#9dafaf";
  event.target.style.transition = "0s"; 
  resultColumn.style.color ="#9dafaf";
  resultColumn.style.transition ="1s";
});

buttonCopyRow.addEventListener('click', function(event){
  navigator.clipboard.writeText(resultRow.innerHTML);
  event.target.innerText = "Адреса строкой cкопированы";
  event.target.style.color = "white";
  event.target.style.backgroundColor = "#9dafaf";
  event.target.style.transition = "0s"; 
  resultRow.style.color ="#9dafaf";
  resultRow.style.transition ="1s";
})










