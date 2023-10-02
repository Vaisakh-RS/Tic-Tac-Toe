const boardDiv=document.getElementById("board");

//To create the board
const gameBoard=(()=>{
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
                cell.style.cssText="border:1px solid black;width:150px;height:150px;font-size:60px;display:flex;align-items:center;justify-content:center;font-family:Arial";
                boardDiv.appendChild(cell);
                
            }
        }
    }
    return {board,createBoard,getCell: () => cell};
})();

//Creates player object
const Player=(name,symbol)=>{
    return{name,symbol};

};

const displayController=(()=>{
   const player1=Player("Player 1","X");
   const player2=Player("Player 2","O");

   //controls game
   function intializeGame()
   {
        gameBoard.createBoard();

        const cells = document.querySelectorAll(".cell");
        const resultDiv=document.getElementById("resultDiv");
        const maxMoves=9; //to check draw
        let moves=0;
    
        cells.forEach((cell,index)=>{
            cell.addEventListener("click",()=>{
                if(!gameOver)
                {
                    if (currentPlayer=== player1) {
                        if(updateBoard(index,"X"))
                        {
                            cell.textContent = "X";
                            currentPlayer = player2;
                            moves++;
                            if(checkWin(gameBoard.board,"X"))
                            {
                                resultDiv.textContent="Player 1 Won!";
                                gameOver=true;
                                
                            }
                            else if(moves==maxMoves)
                            {
                                resultDiv.textContent="It's a Draw!";
                                gameOver=true;
                            }
                        }
                    } 
                        else if(updateBoard(index,"O"))
                        {
                            cell.textContent = "O";
                            currentPlayer = player1;
                            moves++;
                            if(checkWin(gameBoard.board,"O"))
                            {
                                resultDiv.textContent="Player 2 Won!";
                                gameOver=true;
                            }
                            else if(moves==maxMoves)
                            {
                                resultDiv.textContent="It's a Draw!"
                                gameOver=true;
                            }
                        }
                }
            });
        });
   }

//To check if the araay index is empty and insert the symbol into the board array
   function updateBoard(index, symbol) 
   {
        const row = Math.floor(index / 3);
        const col = index % 3;
        
        if(gameBoard.board[row][col]==" ")
        {
            gameBoard.board[row][col] = symbol;
            return true;
        }
        else
        {
            return false;
        }
        
   }

   
   function checkWin(board,playerSymbol)
   {
        const winCombo=[[0,1,2],[3,4,5],[6,7,8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6] ];

        for (const combination of winCombo){
            const[a,b,c]=combination;

            const cellA = board[Math.floor(a / 3)][a % 3];
            const cellB = board[Math.floor(b / 3)][b % 3];
            const cellC = board[Math.floor(c / 3)][c % 3];

            if (cellA === playerSymbol && cellB === playerSymbol && cellC === playerSymbol)
            {
                return true;
            }
           
        }
        return false;
   }


   let currentPlayer=player1;
   let gameOver=false;
   intializeGame();
   
  
})();



