// Create a grid with adjustable size using a slider

const container = document.querySelector(".container");
const slider = document.querySelector(".gridSlider");
const sliderValue = document.querySelector(".sliderValue");

let gridSize = 16; // Default grid size
let borderWidth = 1;

// Function to create the grid
function createGrid(size) {
    container.innerHTML = ""; // Clear the container
    const gridItemSize = container.clientWidth / size ;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.border = `${borderWidth}px solid #ccc`;
        gridItem.style.boxSizing = "border-box";
        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;
        gridItem.addEventListener("mouseenter", () => {
            gridItem.style.backgroundColor = getRandomColor(); // Change color
        });
        container.appendChild(gridItem);
    }
}

// Function to toggle grid borders
function toggleGrid() {
    borderWidth = borderWidth === 1 ? 0 : 1;
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.style.border = `${borderWidth}px solid #ccc`;
    });
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor = "white";
    })
})
// Event listener for the slider
slider.addEventListener("input", (e) => {
    gridSize = e.target.value;
    sliderValue.textContent = `${gridSize} x ${gridSize}`;
    createGrid(gridSize);
});

// Event listener for the grid button
const gridBtn = document.querySelector(".gridBtn");
gridBtn.addEventListener("click", toggleGrid);

// Initialize the grid
createGrid(gridSize);
