// Create the 16x16 grid

// Grid Variables
const gridContainer = document.querySelector('.grid');
let gridElementNumber = 50;
let gridSize = 480/gridElementNumber;
let gridItems;
var i = 0;

// Set size of the grid

gridContainer.style.setProperty('width', `480px`);
gridContainer.style.setProperty('height', `480px`);


// Create grid function
function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = ' ';
        gridContainer.appendChild(cell).className = "grid-item";
    };
    
    gridItems = document.querySelectorAll('.grid-item');

    for (i = 0; i < gridItems.length; i++){
        gridItems[i].style.setProperty('width',`${gridSize}px`);
        gridItems[i].style.setProperty('height', `${gridSize}px`);
    }

    //gridItems.style.setProperty('width', '16px');
    //gridItems.style.setProperty('height', '16px');
};

// Grid Creation
makeRows(gridElementNumber, gridElementNumber);

// On Hover Class Change
for (i = 0; i < gridItems.length; i++){
    gridItems[i].addEventListener('mouseover',function() {
        this.style.setProperty('background-color', 'blue');
    });
};


