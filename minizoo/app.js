var image = document.getElementsByClassName("animal");
var selector = document.getElementById("select");
selector.addEventListener("change", changeFilter);
/* funcion que indica que filtro utilizar a partir del selector*/
function  changeFilter (event) {
  var selectedIndex = event.target.selectedIndex;
  var filter =event.target[selectedIndex].dataset.filtro;
  if (filter === "white-black") {
    changeWhiteBlack();
  }
  else if (filter === "sepia") {
    changeSepia();
  }
  else if (filter === "negative-colors") {
    changeNegativeColors();
  }
  else if (filter === "original") {
    changeOriginal ();
  }
};

/* Funciones que clambian de clase según la selección*/
function changeWhiteBlack () {
  var changeImage = document.getElementsByTagName("img");
  for(var i=0; i<changeImage.length; i++) {
   changeImage[i].className = "white-black";
  }
}
function changeSepia () {
  var changeImage = document.getElementsByTagName("img");
  for (var i=0; i<changeImage.length; i++) {
    changeImage[i].className = "sepia";
}
}
function changeNegativeColors () {
  var changeImage = document.getElementsByTagName("img");
  for (var i=0; i<changeImage.length; i++) {
    changeImage[i].className = "negative-colors";
}
}
function changeOriginal() {
  var changeImage = document.getElementsByTagName("img");
  for (var i=0; i<changeImage.length; i++) {
    changeImage[i].className = "original";
}
}
