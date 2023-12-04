const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const slider = document.querySelector("input");
const p = document.querySelector("p");
let colour = "white";
let lastColour = "white";
let n = 1;
p.textContent = `You have selected ${n} x ${n} grid!`


generateGrids(n)

slider.addEventListener("input", (e) => {
    n = e.target.value
    p.textContent = `You have selected ${n} x ${n} grid!`
    eraseGrid();
    generateGrids(n)
})

buttons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        if (e.target.innerText != "ERASE") {
            lastColour = colour;
            colour = e.target.innerText.toLowerCase()
        } else {
            eraseGrid();
        }
        
    })
})

function generateGrids(n) {
    
    for (let i = 0; i < n * n; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.height = `${720 / n}px`
        grid.style.width = `${720 / n}px`
        container.appendChild(grid)
    }

    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener("mouseenter", (e) => {
            e.target.classList.remove(`${lastColour}`)
            e.target.classList.add(`${colour}`);
        })
    })
}


function eraseGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}