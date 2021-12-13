const container = document.querySelector(".container");
const clearButton = document.querySelector("button");
CreateNewGrid(container);

clearButton.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    prompt("TEST");
});


function CreateNewGrid(container) {
    for (let i = 0; i < 16; i++) {
        const temp = document.createElement("div");
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