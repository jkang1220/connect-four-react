import {
    generateBoard,
    getNextPlayer,
    getUpdatedBoard,
    getUpdatedColumnHeights,
    getWinner,
    checkDiagonals,
    checkRows,
    checkColumns,
    checkConnectFour,
    checkQuadruples,
} from '../utils';

import {
    boardsWithConnectFourRows,
    boardsWithoutConnectFourRows,
    boardsWithConnectFourColumns,
    boardsWithoutConnectFourColumns,
    boardsWithConnectFourDiagonals,
    boardsWithoutConnectFourDiagonals,
} from './fixtures';

const boardOne = generateBoard(6, 7);
const boardTwo = generateBoard(5, 4);
const boardThree = generateBoard(1, 2);

describe('Board related helpers', () => {
    describe('generateBoard', () => {
        test('returns the correct sized board given number of rows and columns', () => {
            expect(boardOne.length).toBe(7);
            expect(boardOne[0].length).toBe(6);
            expect(boardTwo.length).toBe(4);
            expect(boardTwo[0].length).toBe(5);
            expect(boardThree.length).toBe(2);
            expect(boardThree[0].length).toBe(1);
        });
        test('returns an empty board with all row values initally set to 0', () => {
            boardTwo.forEach(column => {
                column.forEach(row => {
                    expect(row).toBe(0);
                });
            });
        });
    });

    describe('getUpdatedBoard', () => {
        test('returns the correct board after updating a value', () => {
            const board = generateBoard(6, 7);

            expect(getUpdatedBoard(board, 1, 0, 2)[0][2]).toBe(1);
            expect(getUpdatedBoard(board, 1, 5, 5)[5][5]).toBe(1);
            expect(getUpdatedBoard(board, 2, 6, 5)[6][5]).toBe(2);
        });
    });
    describe('getUpdatedColumnHeights', () => {
        test('returns the correct updated column height', () => {
            const testCases = [
                {
                    actual: getUpdatedColumnHeights([-1, -1, -1, -1, -1, -1, -1], 6),
                    expected: [-1, -1, -1, -1, -1, -1, 0],
                },
                {
                    actual: getUpdatedColumnHeights([2, 1, 5, 2, 3, 1, 1], 0),
                    expected: [3, 1, 5, 2, 3, 1, 1],
                },
                {
                    actual: getUpdatedColumnHeights([5, 5, 5, 5, 5, 5, 5], 3),
                    expected: [5, 5, 5, 5, 5, 5, 5],
                },
            ];

            testCases.forEach(({ actual, expected }) => {
                expect(actual).toEqual(expected);
            });
        });
        test('returns the column heights unmodified if an invalid index is defined', () => {
            expect(getUpdatedColumnHeights([5, 5, 4, 5, 5, 5, 5], -2)).toEqual([5, 5, 4, 5, 5, 5, 5]);
            expect(getUpdatedColumnHeights([5, 5, 4, 5, 5, 5, 5], 7)).toEqual([5, 5, 4, 5, 5, 5, 5]);
        });
    });
});

describe('Connect Four related helpers', () => {
    describe('checkConnectFour', () => {
        test('returns null if all pieces are 0', () => {
            expect(checkConnectFour([0, 0, 0, 0])).toBe(null);
        });
        test('returns the correct player who has a connect four', () => {
            expect(checkConnectFour([1, 1, 1, 1])).toBe(1);
            expect(checkConnectFour([2, 2, 2, 2])).toBe(2);
        });
        test('returns null if there is no connect four', () => {
            expect(checkConnectFour([1, 2, 1, 1])).toBe(null);
            expect(checkConnectFour([2, 0, 2, 1])).toBe(null);
            expect(checkConnectFour([2, 2, 1, 1])).toBe(null);
            expect(checkConnectFour([0, 2, 2, 2])).toBe(null);
        });
    });

    describe('checkQuadruples', () => {
        test('returns the correct player who has a connect four given a set of pieces', () => {
            expect(checkQuadruples([2, 1, 1, 1, 1, 0])).toBe(1);
            expect(checkQuadruples([1, 2, 1, 1, 1, 1])).toBe(1);
            expect(checkQuadruples([2, 2, 2, 2, 0, 0])).toBe(2);
            expect(checkQuadruples([2, 2, 2, 2, 0])).toBe(2);
        });
        test('returns null if no player has a connect four given a set of pieces', () => {
            expect(checkQuadruples([2, 1, 1, 2, 1])).toBe(null);
            expect(checkQuadruples([2, 1, 2, 1, 1])).toBe(null);
            expect(checkQuadruples([2, 1, 2, 1, 0, 0])).toBe(null);
            expect(checkQuadruples([1, 2, 2, 2, 0, 0])).toBe(null);
        });
    });

    describe('checkColumns', () => {
        test('returns the correct player who has a connect four given a set of pieces', () => {
            boardsWithConnectFourColumns.forEach(({ board, expectedResult }) => {
                expect(checkColumns(board)).toBe(expectedResult);
            });
        });
        test('returns null if no connect fours are found in columns', () => {
            boardsWithoutConnectFourColumns.forEach(({ board, expectedResult }) => {
                expect(checkColumns(board)).toBe(expectedResult);
            });
        });
    });

    describe('checkRows', () => {
        test('returns the correct player who has a connect four given a set of pieces', () => {
            boardsWithConnectFourRows.forEach(({ board, expectedResult }) => {
                expect(checkRows(board)).toBe(expectedResult);
            });
        });

        test('returns null if no connect fours are found in rows', () => {
            boardsWithoutConnectFourRows.forEach(({ board, expectedResult }) => {
                expect(checkRows(board)).toBe(expectedResult);
            });
        });
    });

    describe('checkDiagonals', () => {
        test('returns the correct player who has a connect four given a set of pieces', () => {
            boardsWithConnectFourDiagonals.forEach(({ board, expectedResult }) => {
                expect(checkDiagonals(board)).toBe(expectedResult);
            });
        });

        test('returns null if no connect fours are found in diagonals', () => {
            boardsWithoutConnectFourDiagonals.forEach(({ board, expectedResult }) => {
                expect(checkDiagonals(board)).toBe(expectedResult);
            });
        });
    });

    describe('getWinner', () => {
        test('returns the correct winner', () => {
            boardsWithConnectFourDiagonals.forEach(({ board, expectedResult }) => {
                expect(getWinner(board)).toBe(expectedResult);
            });
            boardsWithConnectFourColumns.forEach(({ board, expectedResult }) => {
                expect(getWinner(board)).toBe(expectedResult);
            });
            boardsWithConnectFourRows.forEach(({ board, expectedResult }) => {
                expect(getWinner(board)).toBe(expectedResult);
            });
        });

        test('returns null if tie', () => {
            boardsWithoutConnectFourDiagonals.forEach(({ board, expectedResult }) => {
                expect(getWinner(board)).toBe(expectedResult);
            });
            boardsWithoutConnectFourColumns.forEach(({ board, expectedResult }) => {
                expect(getWinner(board)).toBe(expectedResult);
            });
            boardsWithoutConnectFourRows.forEach(({ board, expectedResult }) => {
                expect(getWinner(board)).toBe(expectedResult);
            });
        });
    });
});
