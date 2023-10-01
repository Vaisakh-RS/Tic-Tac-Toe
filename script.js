
const gameBoard=(()=>{

    const boardDiv=document.getElementById("board");
    var board=[[" "," "," "],
               [" "," "," "],
               [" "," "," "]];

    let cell;
    function createBoard()
    {
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                cell=document.createElement("div");
                cell.classList.add("cell");
                cell.style.cssText="border:1px solid black;width:150px;height:150px;font-size:60px;display:flex;align-items:center;justify-content:center";
                boardDiv.appendChild(cell);
                
            }
        }
    }
    return {board,createBoard,getCell: () => cell};
})();


const Player=(name,symbol)=>{
    return{name,symbol};

};



const displayController=(()=>{

   const player1=Player("Player 1","X");
   const player2=Player("Player 2","O");

   function intializeGame()
   {
        gameBoard.createBoard();
        const cells = document.querySelectorAll(".cell");
    
        cells.forEach((cell,index)=>{
            cell.addEventListener("click",()=>{
    
                if (currentPlayer=== player1) {
                    if(updateBoard(index,"X"))
                    {
                        cell.textContent = "X";
                        currentPlayer = player2;
                    }
                  

                } else {
                    if(updateBoard(index,"O"))
                    {
                        cell.textContent = "O";
                        currentPlayer = player1;
                    }
                  
                }
        
            });
        });
       
   }

//To check if the araay index is empty and insert the symbol into the board array
   function updateBoard(index, symbol) {
    const row = Math.floor(index / 3);
    const col = index % 3;
    if(gameBoard.board[row][col]==" ")
    {
        gameBoard.board[row][col] = symbol;
        return true;
    }
    else{
        return false;
    }
        
   }
   let currentPlayer=player1;
   intializeGame();
   
  
})();






