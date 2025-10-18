// Get the grid element from the DOM
const grid = document.getElementById("grid");

// Create the form
const form = document.createElement("form");
// Create input for grid size
const gridSizeInput = document.createElement("input");
gridSizeInput.classList.add("grid-size")
gridSizeInput.setAttribute("type", "number");
gridSizeInput.setAttribute("min", "0");
gridSizeInput.setAttribute("max", "100");
gridSizeInput.setAttribute("step", "1");
gridSizeInput.setAttribute("placeholder", "Taille de la grille");
// Create input for pixel size
const pixelSizeInput = document.createElement("input");
pixelSizeInput.classList.add("grid-size")
pixelSizeInput.setAttribute("type", "number");
pixelSizeInput.setAttribute("min", "0");
pixelSizeInput.setAttribute("max", "100");
pixelSizeInput.setAttribute("step", "1");
pixelSizeInput.setAttribute("placeholder", "Taille des pixels");
// Create submit button
const button = document.createElement("button");
button.setAttribute("type", "submit");
button.textContent = "Valider";

// Get the header element and append the form
const header = document.querySelector("header");
header.appendChild(form); // Add form to header
form.append(gridSizeInput, pixelSizeInput, button); // Add inputs and button to the form

/**
 * Handles form submission to create the grid and pixels
 * @param {Event} event - The submit event
 */
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  // Remove all existing pixels from the grid
  const pixelsToRemove = document.querySelectorAll('.pixel');
  for (const pixel of pixelsToRemove) {
    pixel.remove(); // Remove pixel element
  }
  // Get values from inputs
  const gridSizeInputValue = gridSizeInput.value;
  const pixelSizeInputValue = pixelSizeInput.value;
  // Set grid columns based on input value
  grid.style.gridTemplateColumns = `repeat(${gridSizeInputValue}, 1fr)`;
  // Create pixels for the grid
  for (let round = 0; round < Math.pow(gridSizeInputValue, 2); round++) {
    const pixel = document.createElement("div"); // Create pixel div
    pixel.classList.add("pixel", "grey"); // Add classes for pixel
    pixel.style.height = pixel.style.width = `${pixelSizeInputValue}px`; // Set pixel size
    grid.appendChild(pixel); // Add pixel to grid

    /**
     * Handles click event to change pixel color
     */
    pixel.addEventListener("click", () => {
      // Get the selected color from palette
      const colorSelect = document.querySelector(".color-selected").classList.item(0);
      // Get current color of the pixel
      const currentPixelColor = pixel.classList.item(1);
      // Replace current color with selected color
      pixel.classList.replace(currentPixelColor, colorSelect);
    });
  }
  form.reset(); // Reset form inputs
});

// Get all color elements from the palette
const paletteColors = document.querySelectorAll(".palette > *");

/**
 * Handles click event to select a color from the palette
 */
for (const color of paletteColors) {
  color.addEventListener("click", () => {
    // If the color is not already selected
    if (!color.classList.contains("color-selected")) {
      // Remove 'color-selected' from all colors
      for (const color of paletteColors) {
        if (color.classList.contains("color-selected")) {
          color.classList.toggle("color-selected");
        }
      }
    }
    // Toggle 'color-selected' on the clicked color
    color.classList.toggle("color-selected");
  });
}
