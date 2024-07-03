import gameBoard from './board';
import Player from './player';

class playGame {
    constructor () {
        // initializing the game with players and board
        this.players = [ // stored in an array to allow program automatically track the current player
            new Player(1),
            new Player(2)
        ];
        this.board = gameBoard();
        this.board.setDimensions();

        // auxilliary data for the game
        this.tie = 0;
        this.currentPlayer = Math.random() < 0.5 ? 0 : 1; // automatically picks the player with the first turn and keeps track of who the current player is
        this.row, this.col; // temporarily holds row and col info of current player's mark choice

        this.startGame();
    }

    startGame() {
        for (;;) {
            if (!this.board.hasEmptyCells()) {
                console.log('It is a tie');
                this.tie++;
                break;
            }

            this.setPlayerMark();
            this.board.printBoard();
        }

    }

    setPlayerMark() {
        for (;;) {
            // gets a position from current player and splits the position into individual values, maps them to a number and destructures them into row and col var
            [ this.row, this.col ] = prompt(`Player ${this.players[this.currentPlayer].getId()} enter mark position:`).split(',').map(Number);

            let validPos = this.board.placeMark(this.row, this.col, this.players[this.currentPlayer].getMark());

            // checks if player chose an empty cell
            if (!validPos) {
                alert(`${this.row},${this.col} is not empty.\n try again!`);
            } else {
                break;
            }
        }

        // changes current player
        this.currentPlayer = this.currentPlayer == 1 ? 0 : 1;
    }
}

new playGame();
