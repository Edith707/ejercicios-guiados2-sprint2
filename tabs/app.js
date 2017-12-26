var mostrarOcultar = function (e){
  var tabSeleccionado = e.target.dataset.tabSeleccionado;
  if(tabSeleccionado === "tabdesayuno") {
    console.log("vamos a desayunar");
    /*ocultar comida y postres
    //mostrar desayuno*/
  }else if (tabSeleccionado === "tabcomida"){
    console.log("vamos a comer");
    /*ocultar desayuno y postres
    //mostrarcomida*/
  }else if(tabSeleccionado === "tabpostres"){
    console.log("vamos a comer un postre");
    /*ocultar desayuno y Comida
    mostrar postres*/
  }
}
var cargarPagina = function() {
   var elementosTabs = document.getElementsByClassName('tab');
   for (var i = 0; i<elementosTabs.length; i++) {
      elementosTabs[i].addEventListener("click", mostrarOcultar);
   }
}

cargarPagina();
