
var image = document.getElementsByClassName("animal");
function  changeFilter (event) {
  var selectedIndex = event.target.selectedIndex;
  var filter =event.target[selectedIndex].dataset.filtro;
  if (filter == "white-black") {
    changeWhiteBlack();
  }
  else if (filter == "sepia") {
    changeSepia();
  }
  else if (filter == "negative-colors") {
    changeNegativeColors();
  }
  else if (filter == "original") {
    changeOriginal ();
  }
}

function changeWhiteBlack () {
  for (var i=0; i<image.length; i++) {
    image[i].className = "white-black";
  }
}
function changeSepia () {
  for (var i=0; i<image.length; i++) {
    image[i].className = "sepia";
}
function changeNegativeColors () {
  for (var i=0; i<image.length; i++) {
    image[i].className = "negative-colors";
}
function changeOriginal() {
  for (var i=0; i<image.length; i++) {
    image[i].className = "original";
}
