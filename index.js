// What I want the program to do
/* 
1. When the clear button is pressed the entire etch-container div should be blank. //CHECKED
2. When the erase color button is pressed the entire etch-container with its child items should all be turned to white when a mouse is hovered over the child tiles.
3. When the RGB Color button is pressed it should start coloring the child items in the etch-container using different RGB value which keep on changing when the curosr is hovered over the child items.
4. When one presses the enter Cell button, it should display two prompts allowing one to enter the row and column values which will determine how the child divs will be created in the etch-container div.
5. Style the components and ensure that it is responsive on mobile devices and looks simiar to the inspiration image,
6. DON'T USE AI/CHATGPT/COPILOT for debugging.
*/

document.addEventListener("DOMContentLoaded", function() {

    let buttonClearGrid = document.querySelector(".button-clear-grid");
    let buttonEraseColor = document.querySelector(".button-erase-color");
    let buttonRgbColor = document.querySelector(".button-rgb-color");
    let buttonEnterCellNo = document.querySelector(".enter-cell-no");
    let etchContainer = document.querySelector("#etch-container");

    buttonClearGrid.addEventListener("click", function() {
        etchContainer.innerHTML = "";
    });

    buttonEraseColor.addEventListener("click", function() {
        etchContainer.addEventListener("mouseover", function(event) {
            if (event.target.classList.contains('etch-container-item')) {
                event.target.style.backgroundColor = "#ffffff";
            }
        });
    });

    buttonRgbColor.addEventListener("click", function() {
        etchContainer.addEventListener("mouseover", function(event) {
            if (event.target.classList.contains('etch-container-item')) {
                event.target.style.backgroundColor = getRandomRGB();
            }
        });
    });

    function getRandomRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Prompting for grid size and creating the grid
    buttonEnterCellNo.addEventListener("click", function() {
        let cellValues = handleButtonClick();
        if (cellValues) {
            createFlexboxGrid(cellValues.colNumber, cellValues.rowNumber);
        }
    });

    // Function to handle user input for grid size
    function handleButtonClick() {
        const colNumber = parseInt(prompt("Enter column value between 1 and 100"), 10);
        const rowNumber = parseInt(prompt("Enter row value between 1 and 100"), 10);

        if (isNaN(colNumber) || isNaN(rowNumber)) {
            alert("Please enter valid numbers in both fields!");
            return;
        } else if (colNumber < 1 || colNumber > 100 || rowNumber < 1 || rowNumber > 100) {
            alert("Enter a value between 1 and 100 for either columns and rows.");
            return;
        }

        return { colNumber, rowNumber };
    }

    function createFlexboxGrid(cols, rows) {
        etchContainer.innerHTML = ''; 
    
        const containerWidth = etchContainer.clientWidth;
        const containerHeight = etchContainer.clientHeight;
    
        const cellWidth = containerWidth / cols;  
        const cellHeight = containerHeight / rows; 
        for (let i = 0; i < cols * rows; i++) {
            let cell = document.createElement('div');
            cell.classList.add('etch-container-item');
            cell.style.width = `${cellWidth}px`;  
            cell.style.height = `${cellHeight}px`;  
            etchContainer.appendChild(cell);
        }
    }
    
});
