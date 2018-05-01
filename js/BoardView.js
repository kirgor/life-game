class BoardView {
    constructor(el, onCellClick = (x, y) => {}) {
        this.el = el;
        this.onCellClick = onCellClick;
        this.width = 0;
        this.height = 0;
    }

    drawBoard(board) {
        if (board.width !== this.width || board.height !== this.height) {
            this.width = board.width;
            this.height = board.height;

            while (this.el.firstChild) {
                this.el.removeChild(this.el.firstChild)
            }

            for (let y = 0; y < this.height; y++) {
                const row = document.createElement('div');
                row.className = 'row';
                this.el.appendChild(row);
                for (let x = 0; x < this.width; x++) {
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.addEventListener('click', () => this.onCellClick(x, y));
                    row.appendChild(cell);
                }
            }
        }

        for (let y = 0; y < this.height; y++) {
            const row = this.el.childNodes[y];
            for (let x = 0; x < this.width; x++) {
                const cell = row.childNodes[x];
                BoardView._setCellClass(cell, board.getCell(x, y));
            }
        }
    }

    updateCell(x, y, value) {
        BoardView._setCellClass(this.el.childNodes[y].childNodes[x], value);
    }

    static _setCellClass(cell, value) {
        cell.className = 'cell ' + (value ? 'alive' : 'dead');
    }
}