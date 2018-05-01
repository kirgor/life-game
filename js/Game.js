class Game {
    constructor() {
        this.board = new Board(0, 0);
        this.boardView = new BoardView(document.getElementById('board'), (x, y) => this.onCellClick(x, y));
    }

    setSize(width, height) {
        this.board = new Board(width, height);
        this.boardView.drawBoard(this.board);
    }

    onCellClick(x, y) {
        const value = this.board.getCell(x, y);
        const newValue = value ? 0 : 1;
        this.board.setCell(x, y, newValue);
        this.boardView.updateCell(x, y, newValue);
    }

    next() {
        this.board = this.board.next();
        this.boardView.drawBoard(this.board);
    }
}