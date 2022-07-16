// Variables
const slicerContainer = document.querySelector('.slicer');
const gridDimension = document.querySelector('.gridDimension');
const colorPicker = document.querySelector('#colorPicker');
const resetButton = document.querySelector('.reset-button');

// Create the 16x16 grid

// Grid Variables
const gridContainer = document.querySelector('.grid');
let gridElementNumber = slicerContainer.value;
//let gridElementNumber = 23;
let gridSize = 480/gridElementNumber;
let gridItems;
var i = 0;
let gridColor = colorPicker.value;

// Set size of the grid

gridContainer.style.setProperty('width', `480px`);
gridContainer.style.setProperty('height', `480px`);

gridDimension.innerText = `Grid size: ${gridElementNumber} x ${gridElementNumber}`;

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


// EVENTS!!
// Input Range Event
slicerContainer.addEventListener('input', () => {
    
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    };

    gridElementNumber = slicerContainer.value;
    gridSize = 480/gridElementNumber;

    makeRows(gridElementNumber, gridElementNumber);

    gridDimension.innerText = `Grid size: ${gridElementNumber} x ${gridElementNumber}`;

    // On Hover Class Change
    for (i = 0; i < gridItems.length; i++){
        gridItems[i].addEventListener('mouseover',function() {
            this.style.setProperty('background-color', gridColor);
        });
    };

});

// On Hover Class Change
for (i = 0; i < gridItems.length; i++){
    
    colorPicker.addEventListener('input', function(){
        gridColor = colorPicker.value;
    });
    gridItems[i].addEventListener('mouseover',function() {
        this.style.setProperty('background-color', gridColor);
        
    });
};

// Color picker change

colorPicker.addEventListener('input', function(){
    gridColor = colorPicker.value;
});

// Reset Button

resetButton.addEventListener('click', () => {
    for (i = 0; i < gridItems.length; i++){
        gridItems[i].style.setProperty('background-color',`white`);
    }
});