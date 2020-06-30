// Task 1

let a, b, c;

function getEqual(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

console.log(getEqual(2, 3));

// Task 2

function calcFactorial(a) {
  let f = 1;
  while (a > 0) {
    f = f * a;
    --a;
  }

  return f;
}

console.log(`Факторіал дорівнює ${calcFactorial(4)}`);

// Task 3

function getNumber(a, b, c) {
  return `${a}${b}${c}`;
}

console.log(getNumber(1, 3, 7));

// Task 4

function calcArea(a, b) {
  if (b == undefined) {
    return a * a;
  } else {
    return a * b;
  }
}

console.log(calcArea(4, 8));

// Task 5

let divider;

function getPerfectNumber(a) {
  b = 0;

  for (divider = 1; divider <= a; divider++) {
    if (a % divider == 0 && divider != a) {
      b = b + divider;
    }
  }

  return b == a
    ? console.log(`Число ${a} - досконале`)
    : console.log(`Число ${a} - не досконале`);
}

getPerfectNumber(6);

// Task 6
function getDiapason(a, b) {
  let res = 0;

  while (a <= b) {
    if (getPerfectNumber(a) == false) {
      console.log(getPerfectNumber(a));
    }
    a++;
  }
}

getDiapason(26, 30);

// Task 7

let str;
function getTime(a, b, c) {
  if (c == undefined) {
    str = `${a}:${b}:00`;
  } else if (b == undefined && c == undefined) {
    str = `${a}:00:00`;
  } else {
    str = `${a}:${b}:${c}`;
  }

  return str;
}
console.log(getTime(22, 30));

// Task 8

function getSeconds(a, b, c) {
  b = b + a * 60;
  c = c + b * 60;
  return c;
}
console.log(`В заданому проміжку часу ${getSeconds(0, 22, 40)} cекунд`);

// Task 9

function getHours(c) {
  a = Math.round(b / 60 - 0.5);
  b = Math.round(c / 60 - 0.5);
  c = c % 60;

  return `${a}:${b}:${c}`;
}
console.log(`В заданій кількості секунд ${getHours(1360)} часу`);

// Task 10
let d, e, g, firstDate, secondDate, difference;
function calcDats(a, b, c, d, e, g) {
  console.log(`Різниця в ${a}:${b}:${c} і ${d}:${e}:${g}`);

  firstDate = getSeconds(a, b, c);
  secondDate = getSeconds(d, e, g);

  if (firstDate == secondDate) {
    difference = firstDate - secondDate;
  } else if (firstDate < secondDate) {
    difference = secondDate - firstDate;
  } else {
    console.log("Дати рівні");
  }
  difference = getHours(difference);

  console.log(`Дорівнює ${difference}`);
}

calcDats(2, 30, 40, 3, 10, 30);
