// Ecrire une fonction pour activer le mode light
// Au clic, l'image du boutton change et remplacé par bouton off
// Au clic, la variable "primary-color" devient "shadow-color"
//  ... "background-box-color" inversent "shadow-box-color"
// ... 
const lightMode = (lightButton) => {
  const buttonlight = document.getElementById("theme-btn");
  buttonlight.addEventListener("click", (event) => {
    // step 1: récuperer mon élément cible body
    const body = document.querySelector("body"); 
    // step 2: ajouter la class css "dark" (inverser, basculer, toggle, switch)
    body.classList.toggle("dark");
    // peut être, la piste si dark alors retirer dark ou supprimer
    
  }) 
  
  
}

lightMode();

/**
 * Quand on commence, on est dark, on est sur on
 * quand je passe light, on bascule sur off
 * quand je repasse sur drak, on re bascule sur on
 * reste sur on
 
   

  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
