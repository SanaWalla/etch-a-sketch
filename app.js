const container = document.querySelector('.container');
const refresh = document.querySelector('.refresh');
const squareSize = document.querySelector('.squareSize');



function makeGrid(num) {
    //creates cells in the grid
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.className = "square";
        container.append(div);

        //determine the size of the squares
        let length = 640 / num;
        div.style.width = `${length}px`;
        div.style.height = `${length}px`;


        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = 'black';
        })

    }

}

makeGrid(16);
const square = document.querySelectorAll('.square');

// function styleGrid(color) {
//     //style the squares on mouseover
//     square.forEach((squares) => {
//         squares.addEventListener('mouseover', function () {
//             squares.style.backgroundColor = color;
//         })
//     })
// }

// styleGrid('black');

function removeChild() {
    while (container.firstChild) { container.removeChild(container.firstChild) };
}

//reset the grid 
refresh.addEventListener('click', function () {
    // square.forEach((squares) => {
    //     squares.style.backgroundColor = 'white';
    // });
    // styleGrid('black');
    removeChild();
    makeGrid(16);
})

squareSize.addEventListener('click', function () {
    let result = parseInt(prompt('How many squares per side? Max num = 100!'));
    if (result <= 100) {
        removeChild();
        makeGrid(result);
    }
});




// refresh.addEventListener('click', function () {
//     location.reload();
//     let result = parseInt(prompt('How many squares per side? Max num = 100!'));
//     if (result <= 100) {
//         makeGrid(result);
//     }
// })


// function gridSize(num) {
//     //determine the size of the squares
//     let length = 640 / num;
//     square.forEach((squares) => {
//         squares.style.width = `${length}px`;
//         squares.style.height = `${length}px`;
//     })
// }


// function removeSquares() {
//     square.forEach((squares) => {
//         squares.remove()
//     });
// }