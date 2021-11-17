'use strict';

    let meats = [

        {
            name: 'азу из говядины',
            fish: false,
            sub: false,
        },
        
        {
            name:  'котлеты из говядины',
            fish: false,
            sub: false,
        }, 

        {
            name:  'свинина по-французски',
            fish: false,
            sub: false,
        }, 

        {
            name:  'котлеты из говядины и свинины',
            fish: false,
            sub: false,
        }, 

        {
            name:  'котлеты из говядины и свинины',
            fish: false,
            sub: false,
        }, 

        {
            name:  'свиные отбивные',
            fish: false,
            sub: false,
        }, 

        {
            name:  'свиные ребрышки',
            fish: false,
            sub: false,
        }, 

        {
            name:  'говяжьи ребрышки',
            fish: false,
            sub: false,
        }, 

        {
            name:  'куриное филе',
            fish: false,
            sub: false,
        }, 

        {
            name:  'куриные оладьи',
            fish: false,
            sub: false,
        }, 

        {
            name:  'свиная рулька',
            fish: false,
            sub: false,
        }, 
      
        {
            name:  'говяжий язык',
            fish: false,
            sub: true,
        }, 

        {
            name:  'говяжья печень',
            fish: false,
            sub: true,
        }, 

        {
            name:  'куриные сердечки',
            fish: false,
            sub: true,
        }, 

        {
            name:  'куриная печень',
            fish: false,
            sub: true,
        }, 

        {
            name:  'рыбные палочки',
            fish: true,
            sub: false,
        }, 

        {
            name:  'филе трески',
            fish: true,
            sub: false,
        }, 

        {
            name:  'стейк из форели',
            fish: true,
            sub: false,
        }
                ];
//мясные блюда, требующие гарнира                

    let fullmeals = [
  
        {
            name:  'спагетти карбонара',
            fish: false,
            sub: false,
        }, 

        {
            name:  'спагетти болоньезе',
            fish: false,
            sub: false,
        }, 

        {
            name:  'макароны по-флотски',
            fish: false,
            sub: false,
        }, 

        {
            name:  'пельмени',
            fish: false,
            sub: false,
        }, 

        {
            name:  'фаршированные перцы',
            fish: false,
            sub: false,
        }, 

        {
            name:  'рыбный пирог',
            fish: true,
            sub: false,
        }, 


        {
            name:  'фаршированные баклажаны',
            fish: false,
            sub: false,
        }
    ];
  //мясные блюда, не требующие гарнира



  let soups = [
    {
        name:  'борщ',
        fish: false,
        sub: false,
    },

    {
        name:  'фасолевый суп',
        fish: false,
        sub: false,
    },

    {
        name:  'солянка',
        fish: false,
        sub: false,
    },

    {
        name:  'уха',
        fish: true,
        sub: false,
    },

    {
        name:  'финнская уха',
        fish: true,
        sub: false,
    },

    {
        name:  'куриный суп',
        fish: false,
        sub: false,
    },

    {
        name:  'суп-пюре',
        fish: false,
        sub: false,
    }
  ];
//супы

  let sidedishes =["Горох", "Фасоль", "Рис", "Отварная картошка", "Запеченная картошка", 
                "Жареная картошка", "Макароны", "Пюре", "Гречка"];
//гарнир

let salads =["Помидоры с огурцами", "Витаминный", "Оливье", 
"Окрошка", "Цезарь", "Нарезка свежих овощей", "Капустный", 
"Жареные баклажаны", "Тушеная капуста", "Помидоры с чесноком", "Винегрет"
]
//салаты

let noFish = document.getElementById('fish');
let noInnards = document.getElementById('innards');
let yesSoup = document.getElementById('soup');
let result = document.querySelector('.getmeal__result');

//получение случайного салата
function getSalad(){
    let randomSalad = Math.floor(Math.random() * salads.length);
    let salad = salads[randomSalad];
    return salad;
};

function getMain(){
    let randomBool = Math.random() < 0.37;
//у нас около 6 блюд, не требующих гарнира, и 18 - требующих гарнира
//чтоб не выводить пельмени с картошкой или карбонару с фасолью на гарнир, объявляем случайный выбор
//примерно 30% randomBool = true
//в таком случае пусть будет блюдо, не требующее гарнира
//иначе (оставшиеся 80%) будет мясо + гарнир
    if (randomBool == true){
        let randomMain = Math.floor(Math.random() * fullmeals.length);
        let mainDish = fullmeals[randomMain].name;
        return mainDish;
    }else{
        let randomMeat = Math.floor(Math.random() * meats.length);
        let randomSide = Math.floor(Math.random() * sidedishes.length);
        let mainDish = {
            meat: meats[randomMeat],
            side: sidedishes[randomSide]
        };
        return mainDish;
    }
};

function getSoup(){
    let randomSoup = Math.floor(Math.random() * soups.length);
    let finalSoup = soups[randomSoup].name;
    return finalSoup;
}

let button = document.querySelector('button');
button.addEventListener('click', function(event){
    let mainDish = getMain();
    if (mainDish.meat == undefined){ //mainDish.meat отсутствует только если выпало полное блюдо, не требующее гарнира
        result.innerHTML = "На ужин у нас " + mainDish
        if (yesSoup.checked === true){
            let mainSoup = getSoup();
            result.innerHTML = result.innerHTML + ", а супчик - " + mainSoup;
            }
        }else{
        result.innerHTML = "на ужин у нас " + mainDish.meat.name + " и " + mainDish.side;
        if (yesSoup.checked === true){
            let mainSoup = getSoup();
            result.innerHTML = result.innerHTML + ", а супчик - " + mainSoup.name;
            };
        }
});

