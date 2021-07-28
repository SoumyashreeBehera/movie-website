function slideShow() {
  let arr = ["1.jpg", "2.jpg", "3.jpg"];

  let div = document.getElementById("slideshow");
  let i = 0;
  let img = document.createElement("img");
  img.src = arr[0];
  div.append(img);
  setInterval(function () {
    if (i == 3) i = 0;
    img.src = arr[i];
    i++;
  }, 2000);
}
slideShow();
let movies = [
  {
    name: "Avengers Endgame",
    date: "2018",
    url: "10.jpg",
    imdb: "8.5",
  },
  {
    name: "Avengers InfinityWar",
    date: "2012",
    url: "9.jpg",
    imdb: "9",
  },
  {
    name: "Thor love and thunder",
    date: "2022",
    url: "7.jpg",
    imdb: "9.1",
  },
  {
    name: "Thor Darkworld",
    date: "2013",
    url: "8.jpg",
    imdb: "8.9",
  },
  {
    name: "The Incredible Hulk2",
    date: "2011",
    url: "6.jpg",
    imdb: "8.2",
  },
  {
    name: "Black PAnther",
    date: "2017",
    url: "4.jpg",
    imdb: "9.3",
  },
  {
    name: "Doctor Strange",
    date: "2017",
    url: "5.jpg",
    imdb: "9",
  },
  {
    name: "Avengers Infinity War",
    date: "2018",
    url: "2.jpg",
    imdb: "9.7",
  },
  {
    name: "Ironman",
    date: "2012",
    url: "1.jpg",
    imdb: "8.7",
  },
];
if (localStorage.getItem("movies") == null) {
  localStorage.setItem("movies", JSON.stringify(movies));
}

function showMovies(m) {
  let movies = m;
  let moviesDiv = document.getElementById("movies");
  moviesDiv.innerHTML = null;
  movies.forEach((el) => {
    let div = document.createElement("div");
    let pNAme = document.createElement("div");
    pNAme.innerHTML = el.name;
    let pDate = document.createElement("div");
    pDate.innerHTML = el.date;
    let img = document.createElement("img");
    img.src = el.url;
    let pImdb = document.createElement("div");
    pImdb.innerHTML = el.imdb;
    div.append(img, pNAme, pDate, pImdb);
    moviesDiv.append(div);
  });
}
showMovies(JSON.parse(localStorage.getItem("movies")));

let signUp = document.getElementById("signup");
signUp.addEventListener("click", function () {
  window.location.href = "signup.html";
});
let logIn = document.getElementById("login");
logIn.addEventListener("click", function () {
  window.location.href = "login.html";
});

function sortLH() {
  let movies = JSON.parse(localStorage.getItem("movies"));
  movies = movies.sort((a, b) => a.imdb - b.imdb);
  console.log(movies);
  showMovies(movies);
}
function sortHL() {
  let movies = JSON.parse(localStorage.getItem("movies"));
  movies = movies.sort((a, b) => b.imdb - a.imdb);
  console.log(movies);
  showMovies(movies);
}

async function searchbutton() {
  let input = document.getElementById("searchMovie").value;
  try {
    let res = await fetch(`http://www.omdbapi.com/?t=${input}&apikey=a693b6b`);
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
