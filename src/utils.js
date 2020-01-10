//PLAYER RELATED HELPERS
const getNextPlayer = currentPlayer => (currentPlayer === 1 ? 2 : 1);

//BOARD RELATED HELPERS
const generateBoard = (rows, columns) => {
    let board = [];
    for (let i = 0; i < columns; i++) {
        let col = [];
        for (let j = 0; j < rows; j++) {
            col.push(0);
        }
        board.push(col);
    }

    return board;
};

const getNewColumns = numOfColumns => new Array(numOfColumns).fill(-1);
const getUpdatedBoard = (board, player, col, row) => {
    const newBoard = board.slice();

    newBoard[col][row] = player;
    return newBoard;
};

const getUpdatedColumnHeights = (columnHeights, col) => {
    if (columnHeights[col] !== undefined) {
        const newHeights = columnHeights.slice();

        newHeights[col] = newHeights[col] >= 5 ? 5 : newHeights[col] + 1;
        return newHeights;
    }
    return columnHeights;
};

//WINNER DETECTION HELPERS
const checkConnectFour = quad => {
    if (quad[0] === quad[1] && quad[2] === quad[3] && quad[0] === quad[2] && quad[0] !== 0) {
        return quad[0];
    }

    return null;
};

const checkQuadruples = group => {
    for (let i = 0; i + 3 < group.length; i++) {
        let quadruple = group.slice(i, i + 4);
        const winner = checkConnectFour(quadruple);
        if (winner) {
            return winner;
        }
    }

    return null;
};

const checkRows = board => {
    const numOfRows = board[0].length;
    const numOfCols = board.length;

    for (let k = 0; k < numOfRows; k++) {
        const row = [];
        for (let j = 0; j < numOfCols; j++) {
            row.push(board[j][k]);
        }

        const winner = checkQuadruples(row);
        if (winner) {
            return winner;
        }
    }
    return null;
};

const checkColumns = board => {
    const numOfCols = board.length;

    for (let i = 0; i < numOfCols; i++) {
        let column = board[i];
        const winner = checkQuadruples(column);
        if (winner) {
            return winner;
        }
    }

    return null;
};

const checkDiagonals = board => {
    const numOfRows = board[0].length;
    const numOfCols = board.length;

    for (let i = numOfRows + 2; i > 2; i--) {
        const diagonal = [];
        let col_idx = 0;
        let row_idx = i;
        while (row_idx !== -1) {
            if (row_idx >= 0 && col_idx < numOfCols && row_idx < numOfRows) {
                diagonal.push(board[col_idx][row_idx]);
            }
            col_idx++;
            row_idx--;
        }

        const winner = checkQuadruples(diagonal);
        if (winner) {
            return winner;
        }
    }

    for (let rowIterator = -numOfRows + 3; rowIterator < numOfRows - 3; rowIterator++) {
        const diagonal = [];
        let col_idx = 0;
        let row_idx = rowIterator;

        while (row_idx < numOfRows) {
            if (col_idx < numOfCols && row_idx >= 0 && row_idx < numOfRows) {
                diagonal.push(board[col_idx][row_idx]);
            }
            col_idx++;
            row_idx++;
        }

        const winner = checkQuadruples(diagonal);

        if (winner) {
            return winner;
        }
    }

    return null;
};

const getWinner = board => {
    const winnerByColumn = checkColumns(board);
    if (winnerByColumn) {
        return winnerByColumn;
    }

    const winnerByRow = checkRows(board);
    if (winnerByRow) {
        return winnerByRow;
    }

    const winnerByDiagonal = checkDiagonals(board);
    if (winnerByDiagonal) {
        return winnerByDiagonal;
    }

    return null;
};

export {
    checkDiagonals,
    checkRows,
    checkColumns,
    checkConnectFour,
    checkQuadruples,
    generateBoard,
    getNewColumns,
    getNextPlayer,
    getWinner,
    getUpdatedBoard,
    getUpdatedColumnHeights,
};
