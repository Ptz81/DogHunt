// TASK 1

/* 
Знайти кнопку;
Знайти лічильник;
Зробити клік по першій кнопці;
Збільшити лічильник на одиницю;
Створити функцію лічильника;
Відобразити результат у span;
Знайти 2 кнопку і змінити стилі у параграфі
Завантажити аудіо
Знайти аудіо та 3 кнопку
При натисканні на 3 кнопку відтворювати аудіо
*/



// Обераємо елементи на сторінці

// const btn = document.querySelector('#btn');
// const blockCount = document.querySelector('#counter');


// const soundGun = document.querySelector('#soundGun');
// const soundBtn = document.querySelector('#soundBtn');

// Встановлюємо значення

// let countClick = 0;


// Функція лічильник

// function btnClick() {
//     countClick = countClick + 1;
//     blockCount.innerText = countClick;
// }


// Зміна фону

// secondBtn.onclick = function () {
//     let paragraph = document.querySelector('#paragraph');
//     paragraph.style.color = "white";
//     paragraph.style.backgroundColor = "green";
    
// }
// Звук
// soundBtn.onclick = function () {
    
//     soundGun.play();
// }

//TASK 2

// Обрати качку і помістити у змінну
// навчитись змінювати позицію качки
// Навчитися змінювати картинку качки: якщо немає картинки, то обнуляти її;
// Навчитися рухати качку по таймеру
// навчитися обмежувати координати руху качки

// const duck = document.querySelector('.duck');
// let imageDuck = 1;

// // Прописуємо функціонал:

// //запускаємо качку через set Interval і вказуємо лічильник внизу
// const timer = setInterval(function () {

//     //шукаємо шлях до картинки
//     duck.style.backgroundImage = `url(assets/images/duck/black/left/${imageDuck}.png)`;

//     //змінюємо картинки
//     imageDuck += 1;

//     //умова якщо немає більше картинки
//     if (imageDuck > 2) {
//     imageDuck = 0;
//     }

//     //рух качки
//     duck.style.left = duck.offsetLeft - 10 + 'px';

//     //обмеження, щоб качка не вийшла за екран
//     if (duck.offsetLeft < 0) {
//         clearInterval(timer);
//     }
// }, 200)

//TASK 3

/*
створити 3 качки
зробити випадковий рух качкам
   - виліт з випадкового місця
   - випадковий напрям
   - 6 варіантів руху качки: ліво, право, ліво вних, ліво вверх, право вниз, право вверх
коли качка долітає до границі, змінити напрям
зробити випадковий колір качки


*/

const score = 20;
let bullets = 5;
//знаходимо контейнер для вставки качок
const gameArea = document.querySelector('.game-area');

//створення качки
// function createDuck(top, left, type) {
//     let ducks = `<div class="duck ${type}-duck-left" style="left: ${left}; top: ${top}"></div>`;
//     gameArea.innerHTML += ducks;
// }

// інштй спосіб створення функції 

function createDuck(left) {
    let duck = document.createElement('div');
     
    // таймер привязуємо до качки
    
    //вибір типу качки по кольору

     let type = getRandomInt(0, 2);
        if (type === 0) {
            type = 'black';
        } else {
            type = 'red';
        }
    let timer = moveDuck(duck, type);

    duck.className = `duck ${type}-duck-left`;
    duck.style.top ="100%";
    duck.style.left = getRandomInt(0, 100) + "%";
    //створюємо дата атрибут
    duck.dataset.timer = timer;
    
    gameArea.appendChild(duck);

   
}

// викликаємо функцію та передаємо параметри
// createDuck(getRandomInt(0, 100) + '%', 'red');
// createDuck(getRandomInt(0, 100) + '%', 'black');
// createDuck(getRandomInt(0, 100) + '%', 'red');
// createDuck(getRandomInt(0, 100) + '%', 'black');

function start() {
    // лічильник
    let i = 0;

    //перевірка куль
    while (i < bullets) {
        // викликаємо функцію створення куль
        createBullets();
        //викликаємо функцію створення качки
        createDuck();
        i++
    }
}
//створюємо елемент патронів
function createBullets(){
    let bulletsBlock = document.querySelector('.bullets-container');
    let bullets = document.createElement('div');
    bullets.className = 'bullet';
    bulletsBlock.appendChild(bullets);
}

start();

//подія клік на качку
/*
1.навчитися визначати на що ми клікнули
2.видаляти качку
3.видаляти таймер
*/

gameArea.onclick = function (event) {

    //якщо ми клікаємо на обєкт з класом duck, тоді його видаляємо
    if (event.target.classList.contains('duck') === true) {
        event.target.remove();
    } 
}

// функція руху качок 

// - рухати качку вгору - вправо та вліво 

function moveDuck(duck, type) {

    let imageDuck = 0;

    // запускаємо фукнцію, яка визначає положення качки та направляє рух 
    let direction = directionStart(duck);
    let move = true;
    
    const timer = setInterval(function () {
        //     //змінюємо картинки
        imageDuck += 1;

        //     //умова якщо немає більше картинки
        if (imageDuck > 2) {
            imageDuck = 0;        
        }

        if (move===false) {
            
            //  зміна напрямку качки & move====true
            
            direction = changeDirection(direction);
            move = true;

            // clearInterval(timer);
            
        }

        switch (direction){
            case 'top-right':
                move = moveTopRight(duck, type, imageDuck);
                break;
            case 'top-left':
                move = moveTopLeft(duck, type, imageDuck);
                break;
            case 'left':
                move = moveLeft(duck, type, imageDuck);
                break;
            case 'right':
                move = moveRight(duck, type, imageDuck);
                break;
            case 'down-left':
                move = moveDownLeft(duck, type, imageDuck);
                break;
            case 'down-right':
                move = moveDownRight(duck, type, imageDuck);
                break;
            
            default:
                move = moveTopLeft(duck, type, imageDuck);
                break;
        }

        
            //     //рух качки
        // duck.style.left = duck.offsetLeft - 30 + 'px';
        // duck.style.top = duck.offsetTop - 30 + 'px';

            //     //обмеження, щоб качка не вийшла за екран
            // if (duck.offsetLeft < 0) {
            //     clearInterval(timer);
            // }
    }, 50);
    
    return timer;

}
// повинна повертати topLeft & topRight 
function directionStart(duck) {
    let direction = 'top-left';
    let body = document.querySelector('body');
// якщо качка знаходиться в певному полложені екрану, то змінювати її рух - якщо знаходиться у лівій стороні, то рухатись праворуч 
    if (duck.offsetLeft <= body.clientWidth/2) {
        direction = 'top-right';
    }
    return direction;
}


/*
1. повертати випадковий напрям руху
2. якщо випадковий напрям співпав з новим напрямом, повторити функцію

*/


function changeDirection(before){
    let random = getRandomInt(0, 6) // 6 - не враховується і відпаде
    let direction = null;
    switch (random){
            case 0:
            direction = 'top-right';
                break;
            case 1:
            direction = 'top-left';
                break;
            case 2:
            direction = 'right';
                break;
            case 3:
            direction = 'left';
                break;
            case 4:
            direction = 'down-right';
                break;
            case 5:
            direction = 'down-left';
                break;
            
            default:
            direction = 'top-right';
                break;
    }
    /*
    
    1.якщо качка рухалась вгору, змінити на рух у низ або вбік;
    2.якщо качка рухалась вниз, змінити на рух угору або вбік;

    */


    if (direction === before) {
        changeDirection(before);
    } else {
        return direction;
    }
}

// 6 варіантів руху качок 

// Кожна функція буде робити зміну картинки 
// Функція змінює координати 


// Прописати перевірку границь 

function moveRight(duck, type, imageDuck) {
  //шукаємо шлях до картинки
    duck.style.backgroundImage = `url(assets/images/duck/${type}/right/${imageDuck}.png)`;
    // задаємо напрям руху 
    duck.style.left = duck.offsetLeft + score + 'px';

           // перевіряємо чи качка долетіла до краю 
    if (duck.offsetLeft + duck.clientWidth >= document.body.clientWidth - 5) {
        return false;
    }
    return true;

}

function moveLeft(duck, type, imageDuck) {
    duck.style.backgroundImage = `url(assets/images/duck/${type}/left/${imageDuck}.png)`;
    duck.style.left = duck.offsetLeft - score + 'px';

         if (duck.offsetLeft <= 5) {
        return false;
    }
    return true;
}

function moveTopRight(duck, type, imageDuck) {
    duck.style.backgroundImage = `url(assets/images/duck/${type}/top-right/${imageDuck}.png)`;
    duck.style.left = duck.offsetLeft + score + 'px';
    duck.style.top = duck.offsetTop - score + 'px';

          // перевіряємо чи качка долетіла до краю 
    if (duck.offsetLeft + duck.clientWidth >= document.body.clientWidth - 10 || duck.offsetTop <= 5) {
        return false;
    }
    return true;

}

function moveTopLeft(duck, type, imageDuck) {
    duck.style.backgroundImage = `url(assets/images/duck/${type}/top-left/${imageDuck}.png)`;
    duck.style.left = duck.offsetLeft - score + 'px';
    duck.style.top = duck.offsetTop - score + 'px';

        // перевіряємо чи качка долетіла до краю 
    if (duck.offsetLeft <= 10 || duck.offsetTop <= 10) {
        return false;
    }
    return true;

}

function moveDownRight(duck, type, imageDuck) {
    duck.style.backgroundImage = `url(assets/images/duck/${type}/top-right/${imageDuck}.png)`;
    duck.style.left = duck.offsetLeft + score + 'px';
    duck.style.top = duck.offsetTop + score + 'px';

              // перевіряємо чи качка долетіла до низу 
    if (duck.offsetLeft + duck.clientWidth >= document.body.clientWidth - 5 || duck.offsetTop >=gameArea.clientHeight - 5) {
        return false;
    }
    return true;
}

function moveDownLeft(duck, type, imageDuck) {
    duck.style.backgroundImage = `url(assets/images/duck/${type}/top-left/${imageDuck}.png)`;
    duck.style.left = duck.offsetLeft - score + 'px';
    duck.style.top = duck.offsetTop + score + 'px';

     if (duck.offsetLeft <= 5 || duck.offsetTop >=gameArea.clientHeight - 5) {
        return false;
    }
    return true;
}





// Рандомний вибір місця вильоту качки 
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включається, мінімум включається
}

