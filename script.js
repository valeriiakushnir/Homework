"use strict";

// Task 1

let name = prompt("Ваше ім'я");
console.log(`Привіт, ${name}`);

// Task 2

let year = +prompt("Ваш рік народження");
const TODAY = 2020;
let result = TODAY - year;

console.log(`Ваш вік: ${result} років`);

// Task 3

let length = +prompt("Довжина сторони квадрата в метрах");
let perimeter = 4 * length;

console.log(`Периметр квадрату: ${perimeter} м`); //

// Task 4

let radius = +prompt("Довжина радіуса кола");
let area = Math.PI * radius ** 2;

console.log(`Площа круга: ${Math.round(area)} м^2`);

// Task 5

let distance = +prompt("Введіть відстань між двома містами в кілометрах");
let time = +prompt("Введіть час подорожі в годинах");
let speed = distance / time;

console.log(
  `Швидкість з якою потрібно буде рухатись: ${Math.round(speed)} км/год`
);

// Task 6

let money = +prompt("Введіть ціну в доларах");
const EURO = 0.89;
let dollar = EURO * money;

console.log(`${money} долларів = ${dollar} євро`);

// Task 7

let memoryGb = +prompt("Введіть об'єм флешки в Гб");
let memoryMb = memoryGb * 1024;
let memoryFile = 820;
let file = memoryMb / memoryFile;

console.log(
  `На флешку можна помістити ${Math.round(file)} файлів розміром 820 Мб`
);

// Task 8

let account = +prompt("Введіть кількість ваших грошей");
let price = +prompt("Введіть ціну шоколадки");

let chocolate = account / price;
let rest = account % price;

console.log(
  `Можна купити ${Math.round(
    chocolate
  )} шоколадок, після покупки залишиться ${rest} гривень`
);

// Task 9

let quantity = +prompt("Введіть трьохзначне число");

let firstNum = quantity % 10;
let secondNum = (quantity % 100) / 10 - 0.5;
let thirdNum = quantity / 100 - 0.5;

let resultNum =
  String(firstNum) +
  String(Math.round(secondNum)) +
  String(Math.round(thirdNum));

console.log(`Зворотнім до ${quantity} буде число ${resultNum}`);

// Task 10

const BALANCE = +prompt("Введіть суму вкладу в банк");
let yearPercent = 0.05;
let mounthPercent = 0.05 / 12;
let income = BALANCE * (mounthPercent * 2);
income = Math.round(income);
let deposit = income + BALANCE;

console.log(
  `Сума начислених процентів буде рівна ${income} гривень, на рахунку буде ${deposit} гривні`
);
