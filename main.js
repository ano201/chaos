function tryToLogin() {
  const name = localStorage.getItem('name');
  const password = localStorage.getItem('password');
  const loginFrame = document.getElementById("login-frame");
  if (name == null || password == null) {
    loginFrame.style.display = "block";
  }
}