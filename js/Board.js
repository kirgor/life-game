class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.board = [];
        for (let i = 0; i < width * height; i++) {
            this.board.push(0)
        }
    }

    getCell(x, y) {
        return this.board[x + y * this.width]
    }

    setCell(x, y, value) {
        this.board[x + y * this.width] = value
    }

    next() {
        const nextBoard = new Board(this.width, this.height);

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.width; y++) {
                const adj = this._getAdjacentAliveCount(x, y);
                if (!this.getCell(x, y) && adj === 3 ||
                    this.getCell(x, y) && (adj === 2 || adj === 3)) {
                    nextBoard.setCell(x, y, 1);
                }
            }
        }

        return nextBoard;
    }

    _getAdjacentAliveCount(x, y) {
        let count = 0;

        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                let ax = x + dx;
                let ay = y + dy;

                if (dx === 0 && dy === 0 ||
                    ax < 0 || ax >= this.width ||
                    ay < 0 || ay >= this.height) {
                    continue;
                }

                if (this.getCell(ax, ay)) {
                    count++;
                }
            }
        }

        return count;
    }
}
