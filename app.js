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

function removeChild() {
    while (container.firstChild) { container.removeChild(container.firstChild) };
}

//reset the grid 
refresh.addEventListener('click', function () {
    removeChild();
    makeGrid(16);
})

//user selects the cell size
squareSize.addEventListener('click', function () {
    let result = parseInt(prompt('How many squares per side? Max num = 100!'));
    if (result <= 100) {
        removeChild();
        makeGrid(result);
    }
});

