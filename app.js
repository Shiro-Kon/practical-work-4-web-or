//Напишіть код, який виводить "Hello, World!" в консоль.
let helloWorld = ('Hello, World!');
alert(helloWorld);

//Створіть змінну та присвойте їй значення 5. Потім змініть значення цієї змінної на 10.
let num;
num = 5; 
num = 10;
alert(num);

//Напишіть функцію, яка приймає два числа як аргументи і повертає їх суму.
let x = +prompt('Введіть перше число');
let y = +prompt("Введіть друге число");

alert( x+y);

//Створіть масив з п'яти елементів і виведіть його в консоль.
let array = [4, 5, 1, 6, 2];
console.log(array);

//Напишіть цикл for, який виводить числа від 1 до 10.
let q= 1;
for (q; q<=10; q++) {
    console.log(q);
}

//Напишіть функцію, яка приймає масив чисел і повертає найбільше число в масиві.
function findMost(array1) {
    let most = array1[0];
    for (let i = 1; i < array1.length; i++) {
        if (array1[i] > most) {
            most = array1[i];
        }
    }

    return most;
}

let numarray1 = [18, 4, 22, 8, 49];
let mostnumber = findMost(numarray1);
console.log("Найбільше число в масиві:", mostnumber);

//Створіть об'єкт з властивостями "name" і "age". Виведіть ці властивості в консоль.
let name = ("Andrii");
let age = ('20');
console.log(`Name: ${name}, Age: ${age}`);

//Напишіть код, який запитує в користувача його ім'я і вітає його з використанням цього імені.
let whatUserName = prompt("Яке твоє ім'я?", "Andrii");
alert(`дуже круте ім'я у тебе ${whatUserName}`);

//Створіть функцію, яка приймає рядок як аргумент і повертає цей рядок у зворотному порядку.
let outputString = "Лeша на полке клoпа нашeл";
function reverseOrder(line) {
    return line.split('').reverse().join('');
}
let returnString = reverseOrder(outputString);
console.log(returnString);

//10. Напишіть код, який перевіряє, чи є число парним або непарним.
let enteredNum = +prompt('вести парне чи непарне число', 9);

function parityCheck(enteredNum) {
    if (enteredNum % 2 === 0) {
        return "парне ";
    } else {
        return "непарне";
    }
}

let result = parityCheck(enteredNum);
console.log(`Число ${enteredNum} є ${result}.`);
