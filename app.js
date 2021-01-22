const container = document.querySelector('.container');
const refresh = document.querySelector('.refresh');
const squareSize = document.querySelector('.squareSize')


function makeGrid(num) {
    //creates cells in the grid
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.className = "square";
        container.append(div);
    }
}

makeGrid(16);
const square = document.querySelectorAll('.square');

function gridSize(num) {
    //determine the size of the squares
    let length = 640 / num;
    square.forEach((squares) => {
        squares.style.width = `${length}px`;
        squares.style.height = `${length}px`;
    })
}

function styleGrid(color) {
    //style the squares on mouseover
    square.forEach((squares) => {
        squares.addEventListener('mouseover', function () {
            squares.style.backgroundColor = color;
        })
    })
}

function removeSquares() {
    square.forEach((squares) => {
        squares.remove()
    });
}

gridSize(16);
styleGrid('black');

//reset the grid 
refresh.addEventListener('click', function () {
    square.forEach((squares) => {
        squares.style.backgroundColor = 'white';
    });
    styleGrid('black');
})

squareSize.addEventListener('click', function () {
    let result = parseInt(prompt('How many squares per side? Max num = 100!'));
    if (result <= 100) {
        while (container.firstChild) { container.removeChild(container.firstChild) };
    }
    makeGrid(result);
    gridSize(result);
    styleGrid('black');
})



// refresh.addEventListener('click', function () {
//     location.reload();
//     let result = parseInt(prompt('How many squares per side? Max num = 100!'));
//     if (result <= 100) {
//         makeGrid(result);
//     }
// })