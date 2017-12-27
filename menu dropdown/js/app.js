var submenu =document.getElementsByClassName('submenu');
for(var i=0; i<submenu.length; i++){
  /*agregando un evento a la funcion showMenu*/
  submenu[i].addEventListener("click", showMenu);
}

function showMenu (){
  /*Agrega los elementos cuya class name es itemList osea los del submenu*/
  var listMenu =this.getElementsByClassName("itemList")[0];
  console.log(listMenu);
  
  if (listMenu.classList.contains("hide")){
    listMenu.classList.remove("hide");
    listMenu.classList.add("show");
    console.log(listMenu);
  }else {
    listMenu.classList.remove("show");
    listMenu.classList.add("hide");
    console.log(listMenu);
  }
}
