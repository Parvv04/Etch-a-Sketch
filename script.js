const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');

function createGrid(size) {
  container.innerHTML = ''; // Clear existing grid
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.dataset.opacity = 0; // for darkening

    square.addEventListener('mouseover', () => {
      let currentOpacity = parseFloat(square.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.dataset.opacity = currentOpacity;
      }

      // Generate random RGB values
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      square.style.opacity = currentOpacity;
    });

    container.appendChild(square);
  }
}

function setGridSize() {
  let size = parseInt(prompt("Enter number of squares per side (max 100):"));
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }
  createGrid(size);
}

resizeBtn.addEventListener('click', setGridSize);

// Initial default grid
createGrid(16);
