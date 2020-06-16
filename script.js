// Task 1
let age = prompt("Введіть ваш вік", "18");

let message =
  age < 12
    ? "Ви - дитина"
    : age < 18
    ? "Ви - підліток"
    : age < 60
    ? "Ви - дорослий"
    : "Ви - пенсіонер";

console.log(message);

// Task 2

let a = +prompt("Введіть число від 0 до 9", "3");
let symbol;

switch (a) {
  case 0:
    symbol = ")";
    break;
  case 1:
    symbol = "!";
    break;
  case 2:
    symbol = "@";
    break;
  case 3:
    symbol = "#";
    break;
  case 4:
    symbol = "$";
    break;
  case 5:
    symbol = "%";
    break;
  case 6:
    symbol = "^";
    break;
  case 7:
    symbol = "&";
    break;
  case 8:
    symbol = "*";
    break;
  default:
    symbol = ")";
}
console.log(symbol);

// Task 3

let quantity = +prompt("Введіть трьохзначне число", "333");

let firstNum = Math.round(quantity / 100 - 0.5);
let secondNum = Math.round((quantity % 100) / 10 - 0.5);
let thirdNum = quantity % 10;

message =
  firstNum == secondNum && secondNum == thirdNum && firstNum == thirdNum
    ? "3 однакові цифри"
    : firstNum == secondNum || secondNum == thirdNum || firstNum == thirdNum
    ? "2 однакові цифри"
    : "Немає однакових цифр";

console.log(message);

// Task 4

let year = +prompt("Введіть рік", "2020");

console.log(
  (year % 4 == 0 || year % 400 == 0) && year % 100 !== 0
    ? "Високосний"
    : "Не високосний"
);

// Task 5

quantity = +prompt("Введіть п'ятизначне число", "12321");

a = Math.round(quantity / 10000 - 0.5);
let b = Math.round((quantity % 10000) / 1000 - 0.5);
let c = Math.round((quantity % 100) / 10 - 0.5);
let d = quantity % 10;

message = a == d && b == c ? "Число - паліндром" : "Число - не паліндром";

console.log(message);

// Task 6

let dollar = +prompt("Введіть ціну в доларах", "100");
let valute = prompt("Введіть валюту, в яку потрібно перевести", "EUR/UAN/AZN");

const EUR = 0.89;
const UAN = 26.6;
const AZN = 1.7;

let money =
  valute == "EUR"
    ? dollar * EUR
    : valute == "UAN"
    ? dollar * UAN
    : valute == "AZN"
    ? dollar * AZN
    : "Оберіть валюту з вищеперечислених";

console.log(`${dollar} долларів = ${money} ${valute}`);

// Task 7

let cost = +prompt("Введіть суму покупки", "500");

let price =
  cost < 200
    ? cost
    : cost < 300
    ? cost + cost * 0.03
    : cost < 500
    ? cost + cost * 0.05
    : cost + cost * 0.07;

console.log(`Сума покупки з знижкою буде рівна ${price} гривень`);

// Task 8

let length = +prompt("Довжина кола", "3.14");
let perimeter = +prompt("Периметр квадрату", "16");
let radius = (length / 3.14) * 2;
let side = perimeter / 4;

console.log(
  radius == side / 2
    ? "Коло поміститься в даний квадрат"
    : "Коло не поміститься в даний квадрат"
);

// Task 9

let mark = 0;
let answer = +prompt("2+2=", "4/3/5");

switch (answer) {
  case 4:
    ++mark;
    ++mark;
    break;

  default:
    console.log(`Не вірно`);
    break;
}
answer = +prompt("2+3=", "4/3/5");

switch (answer) {
  case 5:
    ++mark;
    ++mark;
    break;

  default:
    console.log(`Не вірно`);
    break;
}

answer = +prompt("2+1=", "4/3/5");

switch (answer) {
  case 3:
    ++mark;
    ++mark;
    break;

  default:
    console.log(`Не вірно`);
    break;
}

console.log(`Результат: ${mark} балів`);

// Task 10

let day = +prompt("Введіть день", "31");
let mounth = +prompt("Введіть місяць", "12");
year = +prompt("Введіть рік", "2020");

let yearHight =
  (year % 4 == 0 || year % 400 == 0) && year % 100 !== 0 ? true : false;

if (mounth > 12) {
  mounth = "Такого місяця не існує";
} else if (day > 31) {
  day = "Такого дня не існує";
} else if (
  (mounth == 1 ||
    mounth == 3 ||
    mounth == 5 ||
    mounth == 7 ||
    mounth == 8 ||
    mounth == 10) &&
  day === 31
) {
  day = 1;
  ++mounth;
} else if (
  (mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11) &&
  day === 30
) {
  day = 1;
  ++mounth;
} else if (mounth == 2 && yearHight == true && day == 29) {
  day = 1;
  mounth++;
} else if (mounth == 2 && yearHight == false && day == 28) {
  day = 1;
  ++mounth;
} else {
  ++day;
}

if (mounth == 12 && day == 32) {
  ++year;
  mounth = 1;
  day = 1;
}

console.log(`${day}.${mounth}.${year}`);
