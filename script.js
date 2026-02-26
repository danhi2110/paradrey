function open_card() {
  document.getElementById("outside").style.display = "none";
  document.getElementById("inside").style.display = "block";
}

function close_card() {
  document.getElementById("inside").style.display = "none";
  document.getElementById("outside").style.display = "block";
  
  // Mostrar la imagen adicional
  document.getElementById("extra-image").style.display = "block";
}
