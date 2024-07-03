export default function gameBoard() {
    let rows, cols;
    const defaultValue = '.';
    let board;

    const setDimensions = () => {
        rows = Number(prompt('Enter number of rows', '3'));
        cols = Number(prompt('Enter number of columns', '3'));

        setBoard();
    }

    // sets the board with the gotten dimensions and fills it with '.'
    const setBoard = () => {
        board = new Array(rows);
        for (let i = 0; i < rows; i++) {
            board[i] = new Array(cols).fill(defaultValue);
        }
    }

    // returns the current state of the board
    const getBoard = () => board;

    // assigns a visual representation of the board's state to boardOut and logs it to the console
    const printBoard = () => {
        let boardOut = '';
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                boardOut += `${board[i][j]} `
            }
            boardOut += '\n';
        }

        console.log(boardOut);
    }

    const placeMark = (row, col, mark) => {
        if (!isCellEmpty(row, col)) return 0;

        board[row][col] = mark;

        return 1;
    }

    const isCellEmpty = (row, col) => {
        return board[row][col] == '.';
    }

    const hasEmptyCells = () => {
        return board.flat().includes('.');
    }

    return { setDimensions, getBoard, printBoard, placeMark, hasEmptyCells };
}