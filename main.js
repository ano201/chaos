const menuBar = document.getElementById("menu-bar");
const logoutContainer = document.getElementById("logout-container");
const logout = document.getElementById('logout');


function tryToLogin() {
  const name = localStorage.getItem('name');
  const password = localStorage.getItem('password');
  const loginFrame = document.getElementById("login-frame");
  if (name == null || password == null) {
    loginFrame.style.display = "block";
    loggedOut();
  }
}

function loggedOut() {
  menuBar.style.display = "none";
  logoutContainer.style.display = "none";
}

logout.addEventListener("click", function() {
  localStorage.removeItem('password');
  localStorage.removeItem('name');
  window.location.reload();
})