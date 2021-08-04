const loginBtn = document.getElementById("login");
const usrName = document.getElementById("user-name");
const password = document.getElementById("password");

loginBtn.addEventListener("click", function() {
  if ((usrName.value == "chaos24") && (password.value == "chaotic")) {
    localStorage.setItem('name', usrName.value);
    localStorage.setItem('password', password.value);
    window.location.replace = "https://enearn.netlify.app"

  } else {
    alert('Your entered information was not found in our database. Please re-enter your information.')
    usrName.value = "";
    password.value = "";
  }
})