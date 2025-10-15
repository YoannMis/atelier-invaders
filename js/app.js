// On récupère l'objet #grid
const grid = document.getElementById("grid");
// Demande à l'utilisateur de la taille de la grille
// const userInput = Number(prompt("Taille de la grille ?"));
// On met un style CSS à la grille pour gérer le nombre de colonnes

// On récupère le formulaire
// const form = document.querySelector("form");

// On créé un formulaire en JS
const form = document.createElement("form");
const gridSizeInput = document.createElement("input");
gridSizeInput.classList.add("grid-size")
gridSizeInput.setAttribute("type", "number");
gridSizeInput.setAttribute("min", "0");
gridSizeInput.setAttribute("max", "100");
gridSizeInput.setAttribute("step", "1");
gridSizeInput.setAttribute("placeholder", "Taille de la grille");



const pixelSizeInput = document.createElement("input");
pixelSizeInput.classList.add("grid-size")
pixelSizeInput.setAttribute("type", "number");
pixelSizeInput.setAttribute("min", "0");
pixelSizeInput.setAttribute("max", "100");
pixelSizeInput.setAttribute("step", "1");
pixelSizeInput.setAttribute("placeholder", "Taille des pixels");


const button = document.createElement("button");
button.setAttribute("type", "submit");
button.textContent = "Valider";

const header = document.querySelector("header");
header.appendChild(form);
form.append(gridSizeInput, pixelSizeInput, button);


// On récupère l'élément input .grid-size
// const gridSizeInput = document.querySelector(".grid-size");
// On récupère l'élément input .pixel-size
// const pixelSizeInput = document.querySelector(".pixel-size");

// Quand on clique sur le bouton on récupère la valeur de l'input .grid-size
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // On récupère tous les pixels
  // On supprime les pixels du dom
  const pixelsToRemove = document.querySelectorAll('.pixel');
  for (const pixel of pixelsToRemove) {
    pixel.remove();
  }
  
  // On crée la grille
  const gridSizeInputValue = gridSizeInput.value;
  const pixelSizeInputValue = pixelSizeInput.value;
  
  
  grid.style.gridTemplateColumns = `repeat(${gridSizeInputValue}, 1fr)`;
  
  
  
  for (let round = 0; round < gridSizeInputValue; round++) {
    for (let round = 0; round < gridSizeInputValue; round++) {
      // On crée un élément pixel
      const pixel = document.createElement("div");
      // On lui ajoute la class="pixel"
      pixel.classList.add("pixel", "grey");
      // On lui ajoute la height et width
      pixel.style.height = pixel.style.width = `${pixelSizeInputValue}px`;
      // On l'ajoute dans la #grid
      grid.appendChild(pixel);

    }
  }
  const paletteColors = document.querySelectorAll(".palette > *");
  
  for (const color of paletteColors) {
    color.addEventListener("click", () => {
      color.classList.toggle("color-selected");
      // if (!color.classList.contains("color-selected")) {
      //   for (const color of paletteColors) {
      //       color.replace("color-selected", "");
      //   }
      // }
      // color.classList.add("color-selected");
    });
  }
  let colorSelect = document.querySelector(".color-selected").item(0);

  pixel.addEventListener("click", () => {
  //   if (pixel.classList.contains("grey")) {
  //   pixel.classList.replace("grey", "dark");
  // } else if (pixel.classList.contains("dark")){
  //   pixel.classList.replace("dark", "grey");
  // }
  let currentPixelColor = pixel.classList.item(-1);
  pixel.classList.replace(currentPixelColor, colorSelect);
  });
  form.reset();
});

// Gestion sélection de la palette de couleur

//On récupère toutes les couleurs 


//Si on click sur un bouton est que celui-ci n'est pas sélectionné
//alors il devient sélectionné et tous les autres boutons se déselectionnent

