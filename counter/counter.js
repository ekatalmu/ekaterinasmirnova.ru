'use strict';


let input = document.querySelector('.counter__textarea');
let resultWords = document.querySelector('.counter__result__word');
let resultSymbols = document.querySelector('.counter__result__symbol');


input.addEventListener('keyup', function(event){
    wordCounter(event.target.value);
  });

  function isWord(str) {
    let hasWord = false;
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if ((code > 47 && code < 58) || // numeric (0-9)
          (code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123) || // lower alpha (a-z)
          (code > 1039 && code < 1104)){  //(А-Я), (а-я)
            hasWord = true;
        return hasWord;
      }
    }
    return hasWord;
  };

  function wordCounter(text) {
    var text = input.value.split(' ');
    let wordCount = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && isWord(text[i])) {
        wordCount++;
      }
    }
    resultWords.innerText = 'Количество слов: ' + wordCount;
  }

  function symbolCounter(text){
      let symbolCount = text.length;
      resultSymbols.innerText = 'Количество символов без пробелов: ' + symbolCount;
  }

input.addEventListener('keyup', function(event){
    symbolCounter(event.target.value);
  });

  



/*
function isWord(subject){
    let word = false;
    for (let i = 0; i < subject.length; i++){
        let letter = subject.charCodeAt(i);
        if ((letter > 47 && letter < 58) || // (0-9)
        (letter > 64 && letter < 91) || // (A-Z)
        (letter > 96 && letter < 123) || //(a-z)
        (letter > 1039 && letter < 1104)){  //(А-Я), (а-я)
      word = true;
      return word;
    }
  }
  return word;
};

console.log(isWord('dog'));
console.log(isWord(' '));
console.log(isWord('!'));
console.log(isWord('пизда'));

function wordsCount(texty){
    var text = texty.value.split(" ");
    let wordCount = 0;
    for (let i = 0; i < text.length; i++){
        if (text[i] !== " "){
            wordCount = wordCount + 1;
        }
    }
};

console.log(wordsCount('Желтая собака на гвозде сидит . Оооо'));

input.addEventListener('keyup', function(event){
   wordsCount(event.target.value);
});
*/