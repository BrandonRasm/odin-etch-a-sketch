const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    const temp = document.createElement("div");
    temp.classList.add("grid");

    temp.addEventListener("mouseover", function hover() {
        temp.classList.add("hovered");
    });

    temp.addEventListener("mouseout", function unhover() {
        temp.classList.remove("hovered");
    }); 

    container.appendChild(temp);
}

