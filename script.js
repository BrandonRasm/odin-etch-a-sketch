const container = document.querySelector(".container");
const clearButton = document.querySelector("button");
CreateNewGrid(container, 16);

clearButton.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let gridWidth = 0;
    while (gridWidth == 0) {
        const tempWidth = prompt("Select squares per side", "Max 100");
        if (tempWidth < 101 && tempWidth > 0 && !isNaN(tempWidth)) {
            gridWidth = tempWidth;
        }

    }
    CreateNewGrid(container, gridWidth)
});


function CreateNewGrid(container, gridWidth) {
    for (let i = 0; i < gridWidth * gridWidth; i++) {
        const temp = document.createElement("div");
        const boxDim = 512 / gridWidth;
        temp.style.height  = temp.style.width = (boxDim + "px");
        


        temp.classList.add("grid");
        temp.addEventListener("mouseover", function hover() {
            temp.classList.add("hovered");
        });

        // temp.addEventListener("mouseout", function unhover() {
        //     temp.classList.remove("hovered");
        // }); 

        container.appendChild(temp);
    }
}