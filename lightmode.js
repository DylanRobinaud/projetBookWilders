// Ecrire une fonction pour activer le mode light
// Au clic, l'image du boutton change et remplacé par bouton off
// Au clic, la variable "primary-color" devient "shadow-color"
//  ... "background-box-color" inversent "shadow-box-color"
// ... 
const lightMode = (lightButton) => {
  const buttonlight = document.getElementsByClassName("theme-btn");
  buttonlight.addEventListener("click", (event) => {
    bouttonlight = Element.style.background = url(/assets/button_off.png);
  }) 
}

lightMode()