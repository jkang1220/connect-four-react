import helpers from '../Components/algo';
import fixtures from './fixtures';

const {
	getWinner,
	checkDiagonals,
	checkRows,
	checkColumns,
	checkConnectFour,
	checkQuadruples,
} = helpers;

const {
	boardsWithConnectFourRows,
	boardsWithoutConnectFourRows,
	boardsWithConnectFourColumns,
	boardsWithoutConnectFourColumns,
	boardsWithConnectFourDiagonals,
	boardsWithoutConnectFourDiagonals
} = fixtures;

describe('checkConnectFour',() => {
	test('returns null if all pieces are 0', () => {
		expect(checkConnectFour([0,0,0,0])).toBe(null);
	});
	test('returns the correct player who has a connect four', () => {
		expect(checkConnectFour([1,1,1,1])).toBe(1);
		expect(checkConnectFour([2,2,2,2])).toBe(2);
	});
	test('returns null if there is no connect four', () => {
		expect(checkConnectFour([1,2,1,1])).toBe(null);
		expect(checkConnectFour([2,0,2,1])).toBe(null);
		expect(checkConnectFour([2,2,1,1])).toBe(null);
		expect(checkConnectFour([0,2,2,2])).toBe(null);
	});
});

describe('checkQuadruples', () => {
	test('returns the correct player who has a connect four given a set of pieces', () => {
		expect(checkQuadruples([2,1,1,1,1,0])).toBe(1);
		expect(checkQuadruples([1,2,1,1,1,1])).toBe(1);
		expect(checkQuadruples([2,2,2,2,0,0])).toBe(2);
		expect(checkQuadruples([2,2,2,2,0])).toBe(2);
	});
	test('returns null if no player has a connect four given a set of pieces', () => {
		expect(checkQuadruples([2,1,1,2,1])).toBe(null);
		expect(checkQuadruples([2,1,2,1,1])).toBe(null);
		expect(checkQuadruples([2,1,2,1,0,0])).toBe(null);
		expect(checkQuadruples([1,2,2,2,0,0])).toBe(null);
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
getWinner