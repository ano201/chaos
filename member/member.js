const name = document.getElementById("name");
const refferId = document.getElementById("reffer-id");
name.innerText = localStorage.getItem("name");
refferId.innerText += localStorage.getItem("refferId");