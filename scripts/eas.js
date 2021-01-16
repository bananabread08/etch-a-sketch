function createGrid(size){
    for(let i = 0; i < Math.pow(size,2); i++){
        let gridSqr = document.createElement("div");
        gridSqr.setAttribute("id", "squares");
        squareWrapper.appendChild(gridSqr);
    }
}  

const squareWrapper = document.getElementById("container");
createGrid(16);
const divs = document.querySelectorAll("div"); //select all created divs from createGrid();
colorGrid(divs);

function colorGrid(blocks){
    blocks.forEach(div => {
        div.addEventListener("mouseenter", function(){
            div.style.backgroundColor = "red";
        });
    });
}

