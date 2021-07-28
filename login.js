function startLogin(e) {
  e.preventDefault();
  let form = document.getElementById("form");
  let email = form.email.value;
  let password = form.password.value;
  let adminsMovie1 = JSON.parse(localStorage.getItem("adminsMovie"));
  let isExist = false;

  for (let i = 0; i < adminsMovie1.length; i++) {
    let e = adminsMovie1[i].email;
    let pd = adminsMovie1[i].password;
    if (e == email && pd == password) {
      isExist = true;
      break;
    }
  }
  if (!isExist) {
    alert("invalid Credentials");
  } else {
    window.location.href = "home.html";
  }
}
let home = document.getElementById("home");
home.addEventListener("click", function () {
  window.location.href = "home.html";
});
let signUp = document.getElementById("signup");
signUp.addEventListener("click", function () {
  window.location.href = "signup.html";
});
