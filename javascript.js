
const drawBoard = document.querySelector(".container")
drawBoard.setAttribute(
    "style",
    "width:480px; height:480px; display: flex; border: 1px solid black; flex-wrap:wrap;"
)

function createSquare(){
    let square = document.createElement("div")
    square.setAttribute(
        "style", 
            "background-color: pink;border: 1px dotted grey; box-sizing:border-box;"
    )
    return square
}

function getSquareWidth(grid,num) {
    let value = 1/num * grid.clientWidth;
    width = value + "px";
    return width
}

function createDrawBoard(num) {
    let amount = num**2;
    while (amount>0) {
        newSquare = createSquare();
        newWidth = getSquareWidth(drawBoard,num)
        newSquare.style.width = newWidth;
        newSquare.style.height = newWidth;
        drawBoard.appendChild(newSquare);
        amount--;
    }
}

createDrawBoard(16)
