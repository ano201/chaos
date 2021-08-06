const menuBar = document.getElementById("menu-bar");
const logoutContainer = document.getElementById("logout-container");
const logout = document.getElementById('logout');
const frame = document.getElementById("frame");

function login() {
  menuBar.style.display = "block";
  logoutContainer.style.display = "block";
  frame.src = 'member/member.html';
}

function loggedOut() {
  frame.src = 'login/login.html';
}

logout.addEventListener("click", function() {
  localStorage.removeItem('password');
  localStorage.removeItem('usrName');
  localStorage.removeItem('name');
  localStorage.removeItem('refferId');
  window.location.reload();
})


function tryToLogin() {
  const name = localStorage.getItem('usrName');
  const password = localStorage.getItem('password');
  if (name != null || password != null) {
    login();
  } else {
    loggedOut();
  }
}