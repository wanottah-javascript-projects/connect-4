
// get all of the game board cells
const cells = document.querySelectorAll(".cell");

// get the game status text
const gameStatusText = document.querySelector("#gameStatusText");

// get the restart button
const restartButton = document.querySelector("#restartButton");

// 'win' condition array
// used for checking for a 'win' condition
const winConditions =
[
    // row 1, line 1
    [0, 1, 2, 3],

    // row 1, line 2
    [1, 2, 3, 4],

    // row 1, line 3
    [2, 3, 4, 5],

    // row 1, line 4
    [3, 4, 5, 6],


    // row 2, line 1
    [7, 8, 9, 10],

    // row 2, line 2
    [8, 9, 10, 11],

    // row 2, line 3
    [9, 10, 11, 12],

    // row 2, line 4
    [10, 11, 12, 13],


    // row 3, line 1
    [14, 15, 16, 17],

    // row 3, line 2
    [15, 16, 17, 18],

    // row 3, line 3
    [16, 17, 18, 19],

    // row 3, line 4
    [17, 18, 19, 20],


    // row 4, line 1
    [21, 22, 23, 24],

    // row 4, line 2
    [22, 23, 24, 25],

    // row 4, line 3
    [23, 24, 25, 26],

    // row 4, line 4
    [24, 25, 26, 27],


    // row 5, line 1
    [28, 29, 30, 31],

    // row 5, line 2
    [29, 30, 31, 32],

    // row 5, line 3
    [30, 31, 32, 33],

    // row 5, line 4
    [31, 32, 33, 34],


    // row 6, line 1
    [35, 36, 37, 38],

    // row 6, line 2
    [36, 37, 38, 39],

    // row 6, line 3
    [37, 38, 39, 40],

    // row 6, line 4
    [38, 39, 40, 41],


    // column 1, line 1
    [0, 7, 14, 21],

    // column 1, line 2
    [7, 14, 21, 28],

    // column 1, line 3
    [14, 21, 28, 35],


    // column 2, line 1
    [1, 8, 15, 22],

    // column 2, line 2
    [8, 15, 22, 29],

    // column 2, line 3
    [15, 22, 29, 36],


    // column 3, line 1
    [2, 9, 16, 23],

    // column 3, line 2
    [9, 16, 23, 30],

    // column 3, line 3
    [16, 23, 30, 37],


    // column 4, line 1
    [3, 10, 17, 24],

    // column 4, line 2
    [10, 17, 24, 31],

    // column 4, line 3
    [17, 24, 31, 38],


    // column 5, line 1
    [4, 11, 18, 25],

    // column 5, line 2
    [11, 18, 25, 32],

    // column 5, line 3
    [18, 25, 32, 39],


    // column 6, line 1
    [5, 12, 19, 26],

    // column 6, line 2
    [12, 19, 26, 33],

    // column 6, line 3
    [19, 26, 33, 40],


    // column 7, line 1
    [6, 13, 20, 27],

    // column 7, line 2
    [13, 20, 27, 34],

    // column 7, line 3
    [20, 27, 34, 41],



    // diagonal 1, line 1
    [14, 22, 30, 38],


    // diagonal 2, line 1 
    [7, 15, 23, 31],

    // diagonal 2, line 2
    [15, 23, 31, 39],


    // diagonal 3, line 1
    [0, 8, 16, 24],

    // diagonal 3, line 2
    [8, 16, 24, 32],

    // diagonal 3, line 3
    [16, 24, 32, 40],


    // diagonal 4, line 1
    [1, 9, 17, 25],

    // diagonal 4, line 2
    [9, 17, 25, 33],

    // diagonal 4, line 3
    [17, 25, 33, 41],


    // diagonal 5, line 1
    [2, 10, 18, 26],

    // diagonal 5, line 2
    [10, 18, 26, 34],


    // diagonal 6, line 1
    [3, 11, 19, 27],



    // diagonal 7, line 1
    [3, 9, 15, 21],


    // diagonal 8, line 1
    [4, 10, 16, 22],

    // diagonal 8, line 2
    [10, 16, 22, 28],


    // diagonal 9, line 1
    [5, 11, 17, 23],

    // diagonal 9, line 2
    [11, 17, 23, 29],

    // diagonal 9, line 3
    [17, 23, 29, 35],


    // diagonal 10, line 1
    [6, 12, 18, 24],

    // diagonal 10, line 2
    [12, 18, 24, 30],

    // diagonal 10, line 3
    [18, 24, 30, 36],


    // diagonal 11, line 1
    [13, 19, 25, 31],

    // diagonal 11, line 2
    [19, 25, 31, 37],


    // diagonal 12, line 1
    [20, 26, 32, 38]
];


// player position array
// stores position of current player
// used for checking for a 'win' condition
let playerPosition = [];


// empty cell
const EMPTY_CELL = "";

// the current player
let currentPlayer;

// 'game is running' flag
let gameRunning;

// 'game over' flag
let theGameIsOver;


// game starts here
initialiseGame();


function initialiseGame()
{
    // add 'click' event listeners to the game board cells
    cells.forEach
    (
        cell => cell.addEventListener("click", cellClicked)
    );

    // add a 'click' event listener to the restart button
    restartButton.addEventListener("click", restartGame);

    // clear the game board
    resetGame();
}


function resetGame()
{
    // player position array
    // stores position of current player
    // used for checking for a 'win' condition
    playerPosition = 
    [
        "", "", "", "", "", "", "",
        
        "", "", "", "", "", "", "",
        
        "", "", "", "", "", "", "",

        "", "", "", "", "", "", "",

        "", "", "", "", "", "", "",
        
        "", "", "", "", "", "", ""
    ];

    // loop through the array to clear the cells
    cells.forEach
    (
        cell => cell.textContent = EMPTY_CELL
    );

    // reset current player
    currentPlayer = "X";

    // set 'game over' flag
    theGameIsOver = false;

    // set 'game running' status
    gameRunning = true;

    // set the game status text
    setGameStatusText(`${currentPlayer}'s turn`);
}


function cellClicked()
{
    // offset value for cell directly below the clicked cell
    const bottomeCellIndexOffset = 7;

    // get the index number of clicked cell
    let clickedCellIndex = this.getAttribute("cellIndex");

    // convert the cell value to an integer
    clickedCellIndex = parseInt(clickedCellIndex);

    // if the game is not running
    if (!gameRunning)
    {
        // then return
        return;
    }

    // otherwise, if the selected game cell is not empty
    if (playerPosition[clickedCellIndex] != EMPTY_CELL)
    {
        // then return
        return;
    }

    // otherwise, if the cell directly below the selected cell is empty
    if (playerPosition[clickedCellIndex + bottomeCellIndexOffset] == EMPTY_CELL)
    {
        // then return
        return;
    }

    // otherwise, update the selected cell with the current player
    updateCell(this, clickedCellIndex);

    // then check to see if there is a winner
    checkForWinner();
}


function updateCell(selectedCell, selectedCellIndex)
{
    // store the current player at the selected position
    playerPosition[selectedCellIndex] = currentPlayer;

    // update the cell with the current player piece
    selectedCell.textContent = currentPlayer;
}


function changePlayer()
{
    // if currentPlayer = "X"
    // then
    // set currentPlayer = "O"
    // otherwise
    // leave currentPlayer = "X"
    currentPlayer = (currentPlayer == "X") ? "O" : "X";

    // update game status text
    setGameStatusText(`${currentPlayer}'s turn`);
}


function checkForWinner()
{
    // loop through the 'winConditions' array
    // positions 0 - 8
    for (let i = 0; i < winConditions.length; i++)
    {
        // get the line of cells at the current position
        const winStatus = winConditions[i];

        // get the status of the three cells
        const cellA = playerPosition[winStatus[0]];

        const cellB = playerPosition[winStatus[1]];

        const cellC = playerPosition[winStatus[2]];

        const cellD = playerPosition[winStatus[3]];
    
        // if none the cells being checked are occupied by a player
        if (cellA == EMPTY_CELL || cellB == EMPTY_CELL || cellC == EMPTY_CELL || cellD == EMPTY_CELL)
        {
            // move on to the next cell position
            continue;
        }

        // otherwise, if all three cells are occupied by the current player
        if (cellA == cellB && cellB == cellC && cellC == cellD)
        {
            // then set the 'game over' flag
            theGameIsOver = true;

            // and break out the loop
            break;
        }
    }

    // if the game is over
    if (theGameIsOver)
    {
        gameOver();
    }

    // otherwise, if there are no positions left on the board
    else if (!playerPosition.includes(EMPTY_CELL))
    {
        noMovesLeft();
    }

    // otherwise, change player
    else
    {
        changePlayer();
    }
}


function setGameStatusText(statusText)
{
    gameStatusText.textContent = statusText;
}


function gameOver()
{
    // update game status text
    setGameStatusText(`${currentPlayer} wins`);

    gameRunning = false;
}


function noMovesLeft()
{
    // update game status text
    setGameStatusText(`The game is a draw`);

    gameRunning = false;
}


function restartGame()
{
    // clear the game board
    resetGame();
}
