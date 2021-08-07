const loginBtn = document.getElementById("login");
const usrName = document.getElementById("user-name");
const password = document.getElementById("password");


function login(name,reffer) {
  localStorage.setItem('usrName', usrName.value);
  localStorage.setItem('password', password.value);
  localStorage.setItem('name', name);
  localStorage.setItem('refferId', reffer);
  alert("please reload your browser...");
}


loginBtn.addEventListener("click", function() {
  //Id Cheating------
  if ((usrName.value == "chaos24") && (password.value == "chaotic")) {
    login("Test Id", NaN);
  } else if ((usrName.value == "somudro") && (password.value == "bilas")) {
   login("Somudro Bilas","68723");
  } else if ((usrName.value == "pfahad564") && (password.value == "32423")) {
    login("Fahad Sheikh", "474369");
  } else if ((usrName.value == "robbieshapiro") && (password.value == "chaotic")) {
   login("Robbie","762243");
  } else {
    alert('Your entered information was not found in our database. Please re-enter your information.')
    usrName.value = "";
    password.value = "";
  }
})