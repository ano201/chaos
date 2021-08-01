const loginBtn = document.getElementById("login");
const usrName = document.getElementById("user-name");
const password = document.getElementById("password");

loginBtn.addEventListener("click", function() {
  if ((usrName.value == "chaos24") && (password.value == "chaotic")) {
    localStorage.setItem('name', usrName.value);
    localStorage.setItem('password', password.value);
    toMainPage();
  } else {
    alert('Your entered information was not found in our database. Please re-enter yor information.')
    usrName.value = "";
    password.value = "";
  }
})

function toMainPage() {
  window.location.href = "main/mainpage.html";
}

function tryToLogin() {
  const name = localStorage.getItem('name');
  const password = localStorage.getItem('password');
  if ((name != null) && (password != null)) {
    toMainPage();
  }
}