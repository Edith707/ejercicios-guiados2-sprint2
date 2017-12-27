var mostrarOcultar = function (e){
  var tabSeleccionado = e.target.dataset.tabSeleccionado;
  var desayuno = document.getElementById("desayuno");
  var comida = document.getElementById("comida");
  var postres = document.getElementById("postres");

  if(tabSeleccionado === "tabdesayuno") {
    /*ocultar comida y postres*/
    comida.style.display = "none";
    postres.style.display = "none"
    /*mostrar desayuno*/
    desayuno.style.display = "block";
  }else if (tabSeleccionado === "tabcomida"){
    /*ocultar desayuno y postres*/
    desayuno.style.display = "none";
    postres.style.display = "none"
    /*mostrar comida*/
    comida.style.display = "block";
  }else if(tabSeleccionado === "tabpostres"){
    /*ocultar desayuno y comida*/
    desayuno.style.display = "none";
    comida.style.display = "none"
    /*mostrar postres*/
    postres.style.display = "block";
  }
}
var cargarPagina = function() {
  /*ocultar la opción menú al cargar la página */
  var desayuno = document.getElementById("desayuno");
  var comida = document.getElementById("comida");
  var postres = document.getElementById("postres");
  desayuno.style.display = "none";
  comida.style.display = "none"
  postres.style.display = "none";
   var elementosTabs = document.getElementsByClassName('tab');
   for (var i = 0; i<elementosTabs.length; i++) {
      elementosTabs[i].addEventListener("click", mostrarOcultar);
   }
}

cargarPagina();
