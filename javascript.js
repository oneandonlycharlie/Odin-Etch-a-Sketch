

// This part creats a button to reset the sketchboard //
const body = document.querySelector("body")
const resetButton = document.createElement("button")
resetButton.textContent = "Click here to reset"
resetButton.style.marginBottom = "30px"
body.appendChild(resetButton)

// This part creats a customizabble grid //
function createSquare(){
    let square = document.createElement("div")
    square.className = "square"
    square.setAttribute(
        "style", 
            "background-color: white;border: 1px dotted grey; box-sizing:border-box;"
    )
    return square
}

function getSquareWidth(grid,num) {
    let value = 1/num * grid.clientWidth;
    width = value + "px";
    return width
}

function createDrawBoard(num) {
    let drawBoard = document.createElement("div")
    drawBoard.className = "container"
    drawBoard.setAttribute(
    "style",
    "width:480px; height:480px; display: flex; border: 1px solid grey; flex-wrap:wrap;"
    ) 
    body.appendChild(drawBoard)
    let amount = num**2;
    while (amount>0) {
        newSquare = createSquare();
        newWidth = getSquareWidth(drawBoard,num)
        newSquare.style.width = newWidth;
        newSquare.style.height = newWidth;
        drawBoard.appendChild(newSquare);
        amount--;
    }
    drawBoard.addEventListener("mouseover", mouseEventHandler)
}


createDrawBoard(16)

// This part handles the pen brush/events //


function mouseEventHandler(e) {
    let target = e.target;
    target.style.backgroundColor = "black";
}

function reset (){
    userInput = Number(prompt("Please insert a number to reset the drawing board"))
    let container = document.querySelector(".container")
    container.remove()
    createDrawBoard(userInput)
}


resetButton.addEventListener("click", reset)
