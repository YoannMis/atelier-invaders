// On récupère l'objet #grid
const grid = document.getElementById("grid");
// Demande à l'utilisateur de la taille de la grille
// const userInput = Number(prompt("Taille de la grille ?"));
// On met un style CSS à la grille pour gérer le nombre de colonnes

// On récupère le formulaire
const form = document.querySelector("form");
// On récupère l'élément input .grid-size
const gridSizeInput = document.querySelector(".grid-size");

// Quand on clique sur le bouton on récupère la valeur de l'input .grid-size
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const gridSizeInputValue = gridSizeInput.value;

  // On crée la grille
  grid.style.gridTemplateColumns = `repeat(${gridSizeInputValue}, 1fr)`;
  
  for (let round = 0; round < gridSizeInputValue; round++) {
    for (let round = 0; round < gridSizeInputValue; round++) {
    // On crée un élément pixel
    const pixel = document.createElement("div");
    // On lui ajoute la class="pixel"
    pixel.classList.add("pixel", "grey");
    // On l'ajoute dans la #grid
    grid.appendChild(pixel);
    // 
    }
  }
});

const pixels = document.querySelectorAll(".pixel");

for (const pixel of pixels){
  // Écouter l'évènement 'click' sur un pixel
  // Au clic on change la couleur du pixel avec un changement de classe
  pixel.addEventListener("click", () => {
    if (pixel.classList.contains("grey")) {
    pixel.classList.replace("grey", "dark");
  } else if (pixel.classList.contains("dark")){
    pixel.classList.replace("dark", "grey");
  }
  });
}
