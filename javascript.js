
const drawBoard = document.querySelector(".container")
drawBoard.setAttribute(
    "style",
    "width:480px; height:480px; display: flex; border: 1px solid black; flex-wrap:wrap;"
)

function createSquare(){
    let square = document.createElement("div")
    square.setAttribute(
        "style", 
            "background-color: pink;border: 1px dotted black; width:30px; height:30px; box-sizing:border-box;"
    )
    return square
}


function createDrawBoard(num) {
    let amount = num**2;
    while (amount>0) {
        newSquare = createSquare();
        drawBoard.appendChild(newSquare);
        amount--;
    }
}

createDrawBoard(16)