//Task 1

let x = +prompt("Менше число діапазону", "6");
let y = +prompt("Більше число діапазону", "20");
let res = 0;

while (x < y) {
  res = res + x;
  x++;
}

console.log(`Сума чисел в діапазоні ${res}`);

//Task 2

x = Math.abs(x);
y = Math.abs(y);

if (y > x) {
  var temp = x;
  x = y;
  y = temp;
}

while (true) {
  if (y == 0) console.log(x);

  x %= y;
  if (x == 0) console.log(y);
  y %= x;
}

//Task 3

let number = 15;
for (var i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(`Дільник ${i}`);
  }
}

//Task 4

let n = 20092;
for (i = 0; n > 1; i++) {
  n /= 10;
}
console.log(`В числі ${i} цифр`);

// Task 5

let neg = 0;
pos = 0;
zero = 0;
even = 0;
noteven = 0;

for (let i = -4; i <= 5; i++) {
  if (i < 0) {
    neg++;
  } else if (i > 0) {
    pos++;
  } else {
    zero++;
  }
}

for (let i = -4; i <= 5; i++) {
  if (i % 2 == 0) {
    even++;
  } else {
    noteven++;
  }
}

console.log(
  `Негативних: ${neg}; Позитивних: ${pos}; Нулів: ${zero}; Парні: ${even}; Непарні: ${noteven};)`
);

// Task 6

let again = true;

do {
  x = +prompt("Введвть перше число", "6");
  y = +prompt("Введіть друге число", "20");
  z = prompt("Введіть дію", "+");

  switch (z) {
    case "+":
      res = x + y;
      break;
    case "-":
      res = x - y;
      break;
    case "*":
      res = x * y;
      break;
    case "/":
      res = x / y;
      break;
    default:
      res = "Ви ввели невірні значення";
  }

  console.log(`${x}${z}${y} = ${res}`);

  again = confirm("Бажаєте вирішити ще одни приклад?");
} while (again == true);

// Task 7

x = prompt("Введіть число", "123456789");
y = +prompt("На скільки зсунути", "5");
arr = x.split("");

for (let i = 0; i < y; i++) {
  arr.push(arr.shift());
}
console.log(arr.join``);

// Task 8

let day = 26;
let mounth = 6;
year = 2020;

do {
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

  again = confirm(`${day}.${mounth}.${year} Бажаєте побачити наступну дату?`);
} while (again == true);

// Task 9

var i, j;

for (i = 2; i <= 10; i++) {
  for (j = 2; j < 10; j++) {
    console.log(j + "*" + i + "=" + i * j);
  }
}

// Task 10

let again;
let i;

let x = +prompt("Загадайте число від 1 до 100", "13");

for (i = 100; i != x; ) {
  again = prompt(`Ваше число > ${i}, < ${i} чи = ${i}`, "<");
  if (again == "<") {
    i = i - i / 2;
    i = Math.round(i);
  } else if (again == ">") {
    i = i + i / 2;
    i = Math.round(i);
  } else {
    console.log(`Ви ввели неправильне значення`);
  }
}

alert(`Ви загадали число ${x}`);
