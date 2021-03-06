const boardsWithConnectFourRows = [
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        expectedResult: 1,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 0, 0],
            [1, 1, 2, 1, 2, 0],
            [2, 2, 1, 2, 2, 0],
            [1, 2, 1, 1, 2, 0],
            [2, 2, 2, 1, 2, 0],
            [1, 1, 2, 1, 1, 0],
        ],
        expectedResult: 2,
    },
    {
        board: [
            [2, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0],
            [1, 2, 1, 0, 0, 0],
            [1, 2, 2, 0, 0, 0],
            [2, 2, 1, 0, 0, 0],
            [1, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        expectedResult: 2,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 0, 0],
            [1, 1, 2, 1, 1, 0],
            [2, 2, 1, 2, 2, 0],
            [1, 2, 1, 1, 2, 0],
            [2, 2, 1, 1, 2, 0],
            [1, 1, 1, 1, 1, 0],
        ],
        expectedResult: 1,
    },
];

const boardsWithoutConnectFourRows = [
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        expectedResult: null,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 0, 0],
            [1, 1, 2, 1, 2, 0],
            [2, 2, 1, 2, 2, 0],
            [1, 2, 1, 1, 1, 0],
            [2, 2, 2, 1, 2, 0],
            [1, 1, 2, 1, 1, 0],
        ],
        expectedResult: null,
    },
    {
        board: [
            [2, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0],
            [1, 2, 1, 0, 0, 0],
            [1, 2, 2, 0, 0, 0],
            [2, 1, 1, 0, 0, 0],
            [1, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        expectedResult: null,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 0, 0],
            [1, 1, 2, 1, 1, 0],
            [2, 2, 1, 2, 2, 0],
            [1, 2, 1, 1, 2, 0],
            [2, 2, 1, 1, 2, 0],
            [1, 1, 0, 0, 0, 0],
        ],
        expectedResult: null,
    },
];

const boardsWithConnectFourColumns = [
    {
        board: [
            [2, 2, 0, 0, 0, 0],
            [1, 2, 0, 0, 0, 0],
            [2, 2, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        expectedResult: 1,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 0, 0],
            [1, 1, 2, 1, 2, 0],
            [2, 2, 1, 2, 2, 0],
            [2, 1, 1, 1, 1, 0],
            [2, 2, 2, 1, 2, 0],
            [1, 1, 2, 1, 1, 0],
        ],
        expectedResult: 1,
    },
    {
        board: [
            [2, 1, 1, 1, 2, 0],
            [1, 1, 1, 0, 0, 0],
            [1, 2, 1, 0, 0, 0],
            [1, 2, 2, 0, 0, 0],
            [2, 1, 1, 0, 0, 0],
            [1, 2, 0, 0, 0, 0],
            [1, 2, 2, 2, 2, 0],
        ],
        expectedResult: 2,
    },
    {
        board: [
            [2, 1, 1, 1, 2, 0],
            [1, 1, 1, 0, 0, 0],
            [1, 2, 1, 0, 0, 0],
            [1, 2, 2, 2, 0, 0],
            [2, 1, 1, 0, 0, 0],
            [1, 1, 2, 2, 2, 2],
            [1, 2, 2, 1, 2, 0],
        ],
        expectedResult: 2,
    },
];

const boardsWithoutConnectFourColumns = [
    {
        board: [
            [2, 2, 0, 0, 0, 0],
            [1, 2, 0, 0, 0, 0],
            [2, 2, 0, 0, 0, 0],
            [1, 1, 1, 2, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        expectedResult: null,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 0, 0, 0, 0],
            [1, 1, 2, 1, 2, 0],
            [2, 2, 1, 2, 2, 0],
            [2, 1, 1, 2, 1, 0],
            [2, 2, 2, 1, 2, 0],
            [1, 1, 2, 1, 1, 0],
        ],
        expectedResult: null,
    },
    {
        board: [
            [2, 1, 1, 1, 2, 0],
            [1, 1, 1, 0, 0, 0],
            [1, 2, 1, 0, 0, 0],
            [1, 2, 2, 0, 0, 0],
            [2, 1, 1, 0, 0, 0],
            [1, 2, 0, 0, 0, 0],
            [1, 2, 2, 2, 1, 0],
        ],
        expectedResult: null,
    },
    {
        board: [
            [2, 1, 1, 1, 2, 0],
            [1, 1, 1, 0, 0, 0],
            [1, 2, 1, 0, 0, 0],
            [1, 2, 2, 2, 0, 0],
            [2, 1, 1, 0, 0, 0],
            [1, 1, 2, 2, 2, 1],
            [1, 2, 2, 1, 2, 0],
        ],
        expectedResult: null,
    },
];

const boardsWithConnectFourDiagonals = [
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 2, 0, 0, 0],
            [2, 2, 1, 0, 0, 0],
            [2, 2, 1, 1, 0, 0],
            [1, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        expectedResult: 1,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0],
            [1, 1, 2, 1, 2, 0],
            [2, 1, 1, 2, 2, 0],
            [1, 1, 2, 2, 1, 0],
            [2, 2, 2, 1, 2, 0],
            [1, 1, 2, 1, 1, 2],
        ],
        expectedResult: 2,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 2, 0, 0, 0],
            [1, 2, 2, 1, 0, 0],
            [2, 2, 1, 0, 0, 0],
            [2, 1, 0, 0, 0, 0],
            [1, 2, 0, 0, 0, 0],
            [2, 2, 0, 0, 0, 0],
        ],
        expectedResult: 1,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 2, 0, 0, 0],
            [2, 2, 2, 0, 0, 0],
            [2, 2, 1, 1, 0, 0],
            [1, 2, 1, 1, 0, 0],
            [2, 1, 2, 2, 1, 0],
            [1, 2, 1, 1, 0, 1],
        ],
        expectedResult: 1,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [1, 2, 2, 1, 1, 2],
            [2, 1, 1, 1, 2, 0],
            [1, 2, 2, 2, 0, 0],
            [2, 1, 2, 0, 0, 0],
            [2, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        expectedResult: 2,
    },
];

const boardsWithoutConnectFourDiagonals = [
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 2, 0, 0, 0],
            [2, 2, 2, 0, 0, 0],
            [2, 2, 1, 1, 0, 0],
            [1, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        expectedResult: null,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0],
            [1, 1, 2, 1, 2, 0],
            [2, 1, 1, 1, 2, 0],
            [1, 1, 2, 2, 1, 0],
            [2, 2, 2, 1, 2, 0],
            [1, 1, 2, 1, 1, 2],
        ],
        expectedResult: null,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 2, 0, 0, 0],
            [1, 2, 2, 2, 0, 0],
            [2, 2, 1, 0, 0, 0],
            [2, 1, 0, 0, 0, 0],
            [1, 2, 0, 0, 0, 0],
            [2, 2, 0, 0, 0, 0],
        ],
        expectedResult: null,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [2, 1, 2, 0, 0, 0],
            [2, 2, 2, 0, 0, 0],
            [2, 2, 1, 2, 0, 0],
            [1, 2, 1, 0, 0, 0],
            [2, 1, 2, 2, 1, 0],
            [1, 2, 1, 1, 0, 1],
        ],
        expectedResult: null,
    },
    {
        board: [
            [1, 0, 0, 0, 0, 0],
            [1, 2, 2, 1, 1, 1],
            [2, 1, 1, 1, 2, 0],
            [1, 2, 2, 2, 0, 0],
            [2, 1, 2, 0, 0, 0],
            [2, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        expectedResult: null,
    },
];

export {
    boardsWithConnectFourRows,
    boardsWithoutConnectFourRows,
    boardsWithConnectFourColumns,
    boardsWithoutConnectFourColumns,
    boardsWithConnectFourDiagonals,
    boardsWithoutConnectFourDiagonals,
};
