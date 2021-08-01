const loginBtn = document.getElementById("login");
const usrName = document.getElementById("user-name");
const password = document.getElementById("password");

loginBtn.addEventListener("click", function() {
  if ((usrName.value == "chaos24") && (password.value == "chaotic")) {
    window.location.href = "main/mainpage.html";
  } else {
    console.log("not");
  }
})
/*
function loadPage() {
  if ((usrName.value == "chaos24") && (password.value == "chaotic")) {
   window.location.href = "main/mainpage.html";
  }
}
*/
function my() {
  alert(usrName.value);
  alert(password.value);
}