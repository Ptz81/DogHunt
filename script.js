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
зробити випадковий руз качкам
коли качка долітає до границі, змінити напрям

*/
//знаходимо контейнер для вставки качок
const gameArea = document.querySelector('.game-area');

//створення качки
function createDuck(top, left, type) {
    let ducks = `<div class="duck ${type}-duck-left" style="left: ${left}; top: ${top}"></div>`;
    gameArea.innerHTML += ducks;
}

// викликаємо функцію та пережаємо параметри
createDuck('10%', '40%', 'red');
createDuck('50%', '10%', 'black');