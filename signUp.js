const adminsMovie = [
  {
    name: "som",
    number: "9861992760",
    email: "soumya@gmail.com",
    password: "1111",
  },
  {
    name: "bib",
    number: "8763023714",
    email: "bib@gmail.com",
    password: "2222",
  },
];

if (localStorage.getItem("adminsMovie") == null) {
  localStorage.setItem("adminsMovie", JSON.stringify(adminsMovie));
}

function startsignUp(e) {
  e.preventDefault();
  let form = document.getElementById("form");
  let name = form.name.value;
  let number = form.number.value;
  let email = form.email.value;
  let passWord = form.password.value;
  let adminsMovie1 = JSON.parse(localStorage.getItem("adminsMovie"));
  let data = {
    name,
    number,
    email,
    passWord,
  };
  var isExist = false;
  for (let i = 0; i < adminsMovie1.length; i++) {
    let e = adminsMovie1[i].email;
    let n = adminsMovie1[i].number;
    let nm = adminsMovie1[i].name;

    if (e == email || n == number || nm == name) {
      alert("user is already signed up");
      isExist = true;
      window.location.href = "login.html";
      break;
    } else if (name == "" || number == "" || email == "" || password == "") {
      isExist = true;
      alert("Pleae fill the empty spaces");
      break;
    }
  }
  if (!isExist) {
    adminsMovie1.push(data);
    localStorage.setItem("adminsMovie", JSON.stringify(adminsMovie1));
    window.location.href = "home.html";
  }
}
let logIn = document.getElementById("login");
logIn.addEventListener("click", function () {
  window.location.href = "login.html";
});
let home = document.getElementById("home");
home.addEventListener("click", function () {
  window.location.href = "home.html";
});
