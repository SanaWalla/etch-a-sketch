const container = document.querySelector('.container');
const refresh = document.querySelector('.refresh');


function makeGrid(num) {
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.className = "square";
        container.append(div);
        let length = 640 / num;
        div.style.width = `${length}px`;
        div.style.height = `${length}px`;

        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = 'black';
        })
    }

    refresh.addEventListener('click', function () {
        div.remove();
        let result = parseInt(prompt('How many squares per side? Max num = 100!'));
        if (result <= 100) {
            makeGrid(result);
        }
    })
}

makeGrid(16);

