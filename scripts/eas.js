function createGrid(size){
    for(let i = 0; i < Math.pow(size,2); i++){
        let gridSqr = document.createElement("div");
        gridSqr.setAttribute("id", "squares");
        squareWrapper.appendChild(gridSqr);
    }
    squareWrapper.style.setProperty(
        "grid-template-columns",
        `repeat(${size}, 1fr)`
    );
}  

function colorGrid(blocks){
    blocks.forEach(div => {
        div.addEventListener("mouseenter", function(){
            div.style.backgroundColor = "cornflowerblue";
        });
    });
}

const dimension = document.getElementById("size");
const squareWrapper = document.querySelector("#container");
const resize = document.querySelector("#resize");
const reset = document.querySelector("#reset");

createGrid(16);
const divs = document.querySelectorAll("div"); //select all created divs from createGrid();
colorGrid(divs);

resize.addEventListener("click", function(){ //event for clicking Resize button
    squareWrapper.innerHTML = "";
    createGrid(dimension.value);
    const resizedivs = document.querySelectorAll("div");
    colorGrid(resizedivs);
});

reset.addEventListener("click", function(){
    squareWrapper.innerHTML = "";
    createGrid(16);
    const resetdivs = document.querySelectorAll("div");
    colorGrid(resetdivs);
});