const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
let colour = "white";
let lastColour = "";

generateGrids(1)

buttons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        lastColour = colour;
        colour = e.target.innerText.toLowerCase()
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

