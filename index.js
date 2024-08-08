let buttonClearGrid = document.querySelector(".button-clear-grid");
let buttonEraseColor = document.querySelector(".button-earse-color");
let buttonRgbColor = document.querySelector(".button-rgb-color");
let etchContainer = document.querySelector("#etch-conatiner");

buttonClearGrid.addEventListener("click",function(){
    etchContainer.innerHTML = "";
});

buttonEraseColor.addEventListener("click", function(){
    buttonEraseColor.setAttribute("style", "background-color: #ffffff")
});

/*
buttonRgbColor.addEventListener('click', function() {
    const randomColor = getRandomRGB(); // Get a random color
    colorBox.style.backgroundColor = randomColor; // Apply the color to the color box
});
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
*/
