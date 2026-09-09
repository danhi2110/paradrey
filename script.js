function open_card() {
  document.getElementById("outside").style.display = "none";
  document.getElementById("inside").style.display = "block";

  // Reiniciar y disparar la animación de rebote de Momonga
  var momonga = document.getElementById("inside-pic");
  momonga.classList.remove("bounce-in");
  void momonga.offsetWidth; // truco para reiniciar la animación CSS
  momonga.classList.add("bounce-in");
}

function close_card() {
  document.getElementById("inside").style.display = "none";
  document.getElementById("outside").style.display = "block";
  
  // Mostrar la imagen adicional
  document.getElementById("extra-image").style.display = "block";
}
