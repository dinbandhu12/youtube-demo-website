var popUp = document.getElementById("pop-up");

var closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", function() {
  popUp.style.display = "none";
});

setTimeout(function() {
  popUp.style.display = "none";
}, 3000);