function createGrid(size){
    squareWrapper.textContent = "";
    for(let i = 0; i < Math.pow(size,2); i++){
        let gridSqr = document.createElement("div");
        gridSqr.classList.add("squares");
        squareWrapper.appendChild(gridSqr);
    }
    squareWrapper.style.setProperty(
        "grid-template-columns",
        `repeat(${size}, 1fr)`
    );
    let divs = document.querySelectorAll("div");
    colorGrid(divs);
}  

function colorGrid(blocks){
    blocks.forEach(div => {
        div.addEventListener("mouseenter", function(){
            div.style.backgroundColor = "#306230";
        });
    });

    rainbow.addEventListener("click", function(){ //rainbow trails event
        blocks.forEach(div => {
            div.addEventListener("mouseenter", function(){
                div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            });
        });
    });
}

const dimension = document.getElementById("size");
const squareWrapper = document.querySelector("#container");
const resize = document.querySelector("#resize");
const reset = document.querySelector("#reset");
const rainbow = document.querySelector("#rainbow");
createGrid(16); //default grid

resize.addEventListener("click", () => { //event for clicking Resize button
    createGrid(dimension.value);
});

reset.addEventListener("click", () => {; //reset to default grid    
    createGrid(16);
});
