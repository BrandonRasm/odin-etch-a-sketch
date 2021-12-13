const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    const temp = document.createElement("div");
    temp.classList.add("grid") ;
    container.appendChild(temp);
}