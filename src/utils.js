//PLAYER RELATED HELPERS
const getNextPlayer = currentPlayer => (currentPlayer === 1 ? 2 : 1);

//BOARD RELATED HELPERS
const generateBoard = (rows, columns) => {
    let board = [];
    for (let i = 0; i < columns; i++) {
        let column = [];
        for (let j = 0; j < rows; j++) {
            column.push(0);
        }
        board.push(column);
    }

    return board;
};

const getNewColumns = () => [-1, -1, -1, -1, -1, -1, -1];
const getUpdatedBoard = (board, currentPlayer, colIdx, rowIdx) => {
    const newBoard = board.slice();

    newBoard[colIdx][rowIdx] = currentPlayer;
    return newBoard;
};

const getUpdatedColumnHeights = (columnHeights, colIdx) => {
    if (columnHeights[colIdx] !== undefined) {
        const newHeights = columnHeights.slice();

        newHeights[colIdx] =
            newHeights[colIdx] >= 5 ? 5 : newHeights[colIdx] + 1;
        return newHeights;
    }
    return columnHeights;
};

//WINNER DETECTION HELPERS
const checkConnectFour = quad => {
    if (
        quad[0] === quad[1] &&
        quad[2] === quad[3] &&
        quad[0] === quad[2] &&
        quad[0] !== 0
    ) {
        return quad[0];
    }

    return null;
};

const checkQuadruples = group => {
    for (let startIdx = 0; startIdx + 3 < group.length; startIdx++) {
        let quadruple = group.slice(startIdx, startIdx + 4);
        const winner = checkConnectFour(quadruple);
        if (winner) {
            return winner;
        }
    }

    return null;
};

const checkRows = board => {
    const rows = board[0].length;
    const columns = board.length;

    for (let k = 0; k < rows; k++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
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
    const columns = board.length;

    for (let i = 0; i < columns; i++) {
        let column = board[i];
        for (
            let colStartIdx = 0;
            colStartIdx + 3 < column.length;
            colStartIdx++
        ) {
            const winner = checkQuadruples(column);
            if (winner) {
                return winner;
            }
        }
    }

    return null;
};

const checkDiagonals = board => {
    const rows = board[0].length;

    for (let rowIterator = rows + 2; rowIterator > 2; rowIterator--) {
        const diagonal = [];
        let COLUMN_INDEX = 0;

        let ROW_INDEX = rowIterator;
        while (ROW_INDEX !== -1) {
            if (
                COLUMN_INDEX >= 0 &&
                ROW_INDEX >= 0 &&
                COLUMN_INDEX < 7 &&
                ROW_INDEX < 6
            ) {
                diagonal.push(board[COLUMN_INDEX][ROW_INDEX]);
            }
            COLUMN_INDEX++;
            ROW_INDEX--;
        }

        const winner = checkQuadruples(diagonal);
        if (winner) {
            return winner;
        }
    }

    for (let rowIterator = -rows + 3; rowIterator < rows - 3; rowIterator++) {
        const diagonal = [];
        let COLUMN_INDEX = 0;
        let ROW_INDEX = rowIterator;

        while (ROW_INDEX < rows) {
            if (
                COLUMN_INDEX >= 0 &&
                ROW_INDEX >= 0 &&
                COLUMN_INDEX < 7 &&
                ROW_INDEX < 6
            ) {
                diagonal.push(board[COLUMN_INDEX][ROW_INDEX]);
            }
            COLUMN_INDEX++;
            ROW_INDEX++;
        }

        const winner2 = checkQuadruples(diagonal);
        if (winner2) {
            return winner2;
        }
    }

    return null;
};

const getWinner = board => {
    const winnerByColumn = checkColumns(board);
    const winnerByRow = checkRows(board);
    const winnerByDiagonal = checkDiagonals(board);

    if (winnerByColumn) {
        return winnerByColumn;
    }
    if (winnerByRow) {
        return winnerByRow;
    }
    if (winnerByDiagonal) {
        return winnerByDiagonal;
    }

    return null;
};

export {
    generateBoard,
    getNewColumns,
    getNextPlayer,
    getWinner,
    getUpdatedBoard,
    getUpdatedColumnHeights,
    checkDiagonals,
    checkRows,
    checkColumns,
    checkConnectFour,
    checkQuadruples,
};