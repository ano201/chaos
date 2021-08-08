const name = document.getElementById("name");
const refferId = document.getElementById("reffer-id");
const refferCode = localStorage.getItem("refferId");
const idName = localStorage.getItem("name");
name.innerText = idName;
refferId.innerText += refferCode;


const survey = document.getElementById("wsurvey");
survey.addEventListener("click", function() {
  alert("cumming soon....🙄😥😥");
});



const adPage = document.getElementById("ads");
adPage.addEventListener("click", function() {
  if (refferCode == 68723) {
    window.location.href = "../ad/68723.html";
  } else if (refferCode == 474369) {
     window.location.href = "../ad/474369.html";
  } else if (refferCode == 762243) {
    window.location.href = "../ad/762243.html";
  } else {
    alert("Test Id");
  }
});