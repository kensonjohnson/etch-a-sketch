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
        square.addEventListener('mouseover', changeBackground);
    };
};

//create a funtion that changes the background color of a square during mouseover event
function changeBackground(e) {
    e.target.style.backgroundColor = 'black';
}

createGrid(16);