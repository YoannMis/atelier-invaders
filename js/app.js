// On récupère l'objet #grid
const grid = document.getElementById("grid");
// Demande à l'utilisateur de la taille de la grille
const userInput = Number(prompt("Taille de la grille ?"));
// On met un style CSS à la grille pour gérer le nombre de colonnes
grid.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;

for (let round = 0; round < userInput; round++) {
  for (let round = 0; round < userInput; round++) {
  // On crée un élément pixel
  const pixel = document.createElement("div");
  // On lui ajoute la class="pixel"
  pixel.classList.add("pixel");
  // On l'ajoute dans la #grid
  grid.appendChild(pixel);
  // 
  }
}