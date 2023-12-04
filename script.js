const container = document.querySelector(".container");


function generateGrids(n) {
    
    for (let i = 0; i < n * n; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.height = `${720 / n}px`
        grid.style.width = `${720 / n}px`
        container.appendChild(grid)
    }
}