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
    Title: "Avengers Endgame",
    Released: "2018",
    Poster: "10.jpg",
    imdbRating: "8.5",
  },
  {
    Title: "Avengers InfinityWar",
    Released: "2012",
    Poster: "9.jpg",
    imdbRating: "9",
  },
  {
    Title: "Thor love and thunder",
    Released: "2022",
    Poster: "7.jpg",
    imdbRating: "9.1",
  },
  {
    Title: "Thor Darkworld",
    Released: "2013",
    Poster: "8.jpg",
    imdbRating: "8.9",
  },
  {
    Title: "The Incredible Hulk2",
    Released: "2011",
    Poster: "6.jpg",
    imdbRating: "8.2",
  },
  {
    Title: "Black PAnther",
    Released: "2017",
    Poster: "4.jpg",
    imdbRating: "9.3",
  },
  {
    Title: "Doctor Strange",
    Released: "2017",
    Poster: "5.jpg",
    imdbRating: "9",
  },
  {
    Title: "Avengers Infinity War",
    Released: "2018",
    Poster: "2.jpg",
    imdbRating: "9.7",
  },
  {
    Title: "Ironman",
    Released: "2012",
    Poster: "1.jpg",
    imdbRating: "8.7",
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
    pNAme.innerHTML = el.Title;
    let pDate = document.createElement("div");
    pDate.innerHTML = el.Released;
    let img = document.createElement("img");
    img.src = el.Poster;
    let pImdb = document.createElement("div");
    pImdb.innerHTML = el.imdbRating;
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
  movies = movies.sort((a, b) => a.imdbRating - b.imdbRating);
  console.log(movies);
  showMovies(movies);
}
function sortHL() {
  let movies = JSON.parse(localStorage.getItem("movies"));
  movies = movies.sort((a, b) => b.imdbRating - a.imdbRating);
  console.log(movies);
  showMovies(movies);
}

async function searchbutton() {
  let input = document.getElementById("searchMovie").value;
  try {
    let res = await fetch(`http://www.omdbapi.com/?t=${input}&apikey=a693b6b`);
    let data = await res.json();
    if (data.Response == "True") showMovies([data]);
    else if (data.Response == "False") {
      let movieFalse = [
        {
          Title: "No movies Found",
          Released: "",
          Poster: "error.jpg",
          imdbRating: "",
        },
      ];
      showMovies(movieFalse);
    }
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
