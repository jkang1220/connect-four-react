import helpers from '../Components/algo';

const {
	getWinner,
	checkDiagonals,
	checkRows,
	checkColumns,
	checkConnectFour,
	checkQuadruples,
} = helpers;

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
		expect(checkColumns([2,1,1,1,1,0])).toBe(1);
		expect(checkColumns([1,2,1,1,1,1])).toBe(1);
		expect(checkColumns([2,2,2,2,0,0])).toBe(2);
		expect(checkColumns([2,2,2,2,0])).toBe(2);
	});
	test('returns null if no player has a connect four given a set of pieces', () => {
		expect(checkColumns([2,1,1,2,1])).toBe(null);
		expect(checkColumns([2,1,2,1,1])).toBe(null);
		expect(checkColumns([2,1,2,1,0,0])).toBe(null);
		expect(checkColumns([1,2,2,2,0,0])).toBe(null);
	});
});

//diagonal
const winnerPlayer1aDiagonal = [
  [1, 0, 0, 0, 0, 0],
  [2, 1, 0, 0, 0, 0],
  [2, 2, 1, 0, 0, 0],
  [1, 2, 2, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

//vertical
const winnerPlayer1bColumn = [
  [1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 2, 0, 0, 0],
  [2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];
//horizontal
const winnerPlayer1cRow = [
  [1, 2, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 2, 0, 0, 0],
  [2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

//horizontal
const winnerPlayer2aRow = [
  [2, 1, 1, 1, 0, 0],
  [2, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0],
  [2, 1, 2, 0, 0, 0],
  [1, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

//vertical
const winnerPlayer2bColumn = [
  [2, 1, 2, 1, 0, 0],
  [2, 2, 2, 2, 0, 0],
  [2, 0, 0, 0, 0, 0],
  [2, 1, 2, 0, 0, 0],
  [1, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

//diagonal
const winnerPlayer2cDiagonal = [
  [2, 1, 2, 1, 0, 0],
  [1, 2, 1, 2, 0, 0],
  [2, 1, 2, 0, 0, 0],
  [2, 1, 2, 2, 0, 0],
  [1, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];
