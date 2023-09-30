const gameBoard=(()=>{
    var board=[
        ["X","O","X"],
        ["O","O","X"],
        ["X","X","O"]
    ];
    return {board};
})();

const player=(name,symbol)=>{
    const getName=()=>name;
    const getSymbol=()=>symbol;

    return{getName,getSymbol};

};

const board=document.getElementById("board");

function createBoard()
{
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            const cell=document.createElement("div");
            cell.style.cssText="border:1px solid black;width:150px;height:150px;font-size:60px;display:flex;align-items:center;justify-content:center";
            cell.textContent=gameBoard.board[i][j];
            board.appendChild(cell);
            
        }
    }
}

createBoard();

