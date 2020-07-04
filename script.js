// Task 1

var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const createTag = (tag) => document.createElement(tag);

function createList() {
  const ol = createTag("ol");

  playList.forEach((track) => {
    const li = createTag("li");
    const h4 = createTag("h4");
    const p = createTag("p");

    h4.innerText = track.author;
    p.innerText = track.song;

    li.append(h4);
    li.append(p);

    ol.append(li);
  });
  document.body.append(ol);
}

createList();

// Task 2

let modalWindow = document.querySelector(".modal-window");
let openWindow = document.querySelector(".btn--open");
let closeWindow = document.querySelector(".btn--close");

openWindow.onclick = function () {
  modalWindow.style.display = "flex";
};

closeWindow.onclick = function () {
  modalWindow.style.display = "none";
};

// Task 3

let red = document.querySelector(".traffic-lights--red");
let yellow = document.querySelector(".traffic-lights--yellow");
let green = document.querySelector(".traffic-lights--green");
let nextLight = document.querySelector(".btn-traffic");

nextLight.onclick = function () {
  if (red.getAttribute("fill") == "#f00") {
    red.setAttribute("fill", "#808080");
    yellow.setAttribute("fill", "#ff0");
    green.setAttribute("fill", "#808080");
  } else if (yellow.getAttribute("fill") == "#ff0") {
    red.setAttribute("fill", "#808080");
    yellow.setAttribute("fill", "#808080");
    green.setAttribute("fill", "#0f0");
  } else {
    red.setAttribute("fill", "#f00");
    yellow.setAttribute("fill", "#808080");
    green.setAttribute("fill", "#808080");
  }
};
