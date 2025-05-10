const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');
const colorPicker = document.getElementById('colorPicker');
const toggleColorBtn = document.getElementById('toggleColorBtn');

let useRandomColor = true;

toggleColorBtn.addEventListener('click', () => {
  useRandomColor = !useRandomColor;
  toggleColorBtn.textContent = useRandomColor ? "🎨 Use Selected Color" : "🌈 Use Random Color";
});

function createGrid(size) {
  container.innerHTML = '';
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.dataset.opacity = 0;

    square.addEventListener('mouseover', () => {
      let currentOpacity = parseFloat(square.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.dataset.opacity = currentOpacity;
      }

      let color;
      if (useRandomColor) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        color = `rgb(${r}, ${g}, ${b})`;
      } else {
        color = colorPicker.value;
      }

      square.style.backgroundColor = color;
      square.style.opacity = currentOpacity;
    });

    container.appendChild(square);
  }
}

  
function setGridSize() {
  let size = parseInt(prompt("Enter number of squares per side (max 100):"));
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  createGrid(size);
}

resizeBtn.addEventListener('click', setGridSize);
createGrid(16);
