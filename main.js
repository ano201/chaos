const loginBtn = document.getElementById("login");
const usrName = document.getElementById("user-name");
const password = document.getElementById("password");

loginBtn.addEventListener("click", function() {
  if ((usrName.value == "chaos24") && (password.value == "chaotic")) {
    window.location.href = "https://somudro.netlify.app";
  } else {
    console.log("not");
  }
})
if ((usrName.value == "chaos24") && (password.value == "chaotic")) {
  window.location.href = "https://somudro.netlify.app";
}