
(() => {

    const game = document.getElementById('game');
    // Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

    let count = Number(prompt('Введите количество пар', 4));

    function createNumbersArray() {

        const cardsNumberArray = [];

        for (let i = 1; i < count + 1; i++) {
            cardsNumberArray.push(i, i)
        }
        return cardsNumberArray;
    }

    createNumbersArray()

    // Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

    let arr = createNumbersArray(count);

    function shuffle(arr) {
        let arrShuffle = [];

        for (let i = 0; i < arr.length; i++) {
            let randomIndex = Math.floor(Math.random() * arr.length);
            let temp = arr[i];
            arr[i] = arr[randomIndex];
            arr[randomIndex] = temp;
        }

        for (let i = 0; i < arr.length; i++) {
            arrShuffle.push(arr[i]);
        }

        return arrShuffle;
    }

    shuffle(arr);

    // Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.
    let firstCard = null;
    let secondCard = null;

    function startGame(count) {
        
        for (const cardNumber of arr) { // для переменной cardNumber из массива переменной arr
            let card = document.createElement('div');
            card.textContent = cardNumber;
            card.classList.add('card');

            card.addEventListener('click', function() {
                if(card.classList.contains('open') || card.classList.contains('success')) {
                    return
                }

                if(firstCard !==null && secondCard !== null) {
                    firstCard.classList.remove('open');
                    secondCard.classList.remove('open');
                    firstCard = null;
                    secondCard = null;
                }
                    
                card.classList.add('open')

                if (firstCard === null) {
                    firstCard = card
                } else {
                    secondCard = card
                }

                if(firstCard !==null && secondCard !== null) {
                    let firstCardNumber = firstCard.textContent;
                    let secondCardNumber = secondCard.textContent;
                    if (firstCardNumber === secondCardNumber) {
                       firstCard.classList.add('success');
                       secondCard.classList.add('success');
                    }

                    if (arr.length === document.querySelectorAll('.success').length) {
                        setTimeout(function () {
                       
                        alert ('ПОБЕДА!')  
                        let count = Number(prompt('Введите количество пар', 4));
                        startGame(game, count)   
                        }, 300)
                    }
                }
            })
            game.append(card);
        }
    }
    
    startGame(game, count)
})();