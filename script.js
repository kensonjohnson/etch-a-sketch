//create a variable to manipulate the grid div
const container = document.getElementById('grid');

//create a funtion that takes in a length to make a square grid
function createGrid(size) {

    //set the height and width of the grid using the given length 
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);

    //create the squares within the grid and assign event listeners to each
    for (i = 0; i < (size * size); i++) {
        let square = document.createElement("div");
        container.appendChild(square).className = "grid-square";
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', changeBackground);
    };
};

//create a funtion that changes the background color of a square during mouseover event
function changeBackground(e) {
    e.target.style.backgroundColor = 'black';
}

//create variable to add eventListener to the reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGrid)

//impelement the resetGrid function
function resetGrid() {
    let size = prompt("Please enter a number between 8 - 100 to determine the size of the grid.");

    //this resets all the grid squares back to white
    let gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(elem => {
        elem.style.backgroundColor = 'white';
    });

    //this rebuilds the grid with the number given.
    //numbers outside of 8 - 100 will cause the grid to default to 16x16
    if (size >= 8 && size <= 100) {
        createGrid(size);
        return
    } else {
        createGrid(16);
        return
    }
}

createGrid(16);