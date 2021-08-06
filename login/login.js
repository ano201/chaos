const loginBtn = document.getElementById("login");
const usrName = document.getElementById("user-name");
const password = document.getElementById("password");

loginBtn.addEventListener("click", function() {
  //Id Cheating------
  if ((usrName.value == "chaos24") && (password.value == "chaotic")) {
    localStorage.setItem('usrName', usrName.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('name', "Test Id");
    localStorage.setItem('refferId', "69696969");
    alert("please reload your browser...")

  } else {
    alert('Your entered information was not found in our database. Please re-enter your information.')
    usrName.value = "";
    password.value = "";
  }
})