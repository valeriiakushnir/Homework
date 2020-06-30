// Task 1
let distance, timeHours, timeSeconds, d, e;
let car = {
  manufacturer: "Kia Motors",
  model: "Kia Niro Hybrid",
  year: 2017,
  averageSpeed: 75,
};

function getCar(obj) {
  for (let key in obj) {
    document.write(`<ul> <li> ${key}: ${obj[key]};</li> </ul>`);
  }
}
getCar(car);

const getSpeed = (car) => car.averageSpeed;

function calcTime(distance) {
  timeSeconds = (distance / getSpeed(car)) * 3600;
  timeHours = getHours((c = timeSeconds));

  return timeHours;
}

document.write(`<p> Час подолання відстані займе ${calcTime(743)} години </p>`);

function getHours(c) {
  a = Math.round(c / 3600 - 0.5);
  b = Math.round((c / 60) % 60);
  c = c % 60;
  d = a;
  e = 0;
  while (d != 0) {
    d--;
    if (d % 4 == 0) {
      a = a - e;
      e++;
    }
  }
  return `${a}:${b}:${c}, з яких час на перерву займе ${e}`;
}

// Task 3

let time = {
  hour: 1,
  minute: 15,
  second: 30,
};
getTime(time);

calcNewSeconds(time, 15);
calcNewMinutes(time, 75);
calcNewHours(time, 2);

function getTime(obj) {
  for (key in obj) {
    document.write(`<span>${obj[key]}:</span>`);
  }
}
function getSeconds(obj) {
  time.minute = time.minute + time.hour * 60;
  time.second = time.second + time.minute * 60;
  return time.second;
}

function calcNewSeconds(obj, seconds) {
  time.second = getSeconds(time);
  time.second = time.second + seconds;
  time.hour = Math.round(time.second / 3600 - 0.5);
  time.minute = Math.round(((time.second / 60) % 60) - 1);
  time.second = time.second % 60;

  return document.write(
    `<p> При додаванні ${seconds} секунд час складе ${time.hour}:${time.minute}:${time.second} </p>`
  );
}

function calcNewMinutes(obj, minutes) {
  time.minute = time.minute + time.hour * 60;
  time.minute = time.minute + minutes;
  time.hour = Math.round(time.minute / 60 - 0.5);
  time.minute = time.minute % 60;

  return document.write(
    `<p> При додаванні ${minutes} хвилин час складе ${time.hour}:${time.minute}:${time.second} </p>`
  );
}

function calcNewHours(obj, hours) {
  time.hour += hours;

  return document.write(
    `<p> При додаванні ${hours} годин час складе ${time.hour}:${time.minute}:${time.second} </p>`
  );
}
