function cellData() {   
    let empty = true;
    let playerMark;
    
    const isEmpty = () => empty;
    const setPlayerMark = function (mark) {
        if (isEmpty) return;
        playerMark = mark;
        empty = false;
    }
    const getPlayerMark = () => playerMark;

    return {isEmpty, setPlayerMark, getPlayerMark}
}

function gameBoard()
{
    const row = 3;
    const column = 3;
    const board = [];
 
    for (let i = 0; i < row; i++) {
        board[i] = [];
        for (let j = 0; j < column; j++) {
            board[i][j] = cellData();
        }
    }

    return board;
}

// console.log(gameBoard())

function createPlayer(name, mark) {
    const getName = () => name;
    const getMark = () => mark;

    return {getName, getMark};
}

//this function checks if there is an empty cell
function emptyCellExists(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j].isEmpty() === true) {
                return true;
            }
        }
    }

    return false;
}

function game() {
    const player1 = createPlayer("bari", 'x');
    const player2 = createPlayer("david", 'o');

    const board = gameBoard();

    // while (emptyCellExists) {
    //     console.log("empty cell")
    // }
}

game();