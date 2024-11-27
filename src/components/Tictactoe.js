import React, { useState } from 'react';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return; // Prevents overwriting a square or clicking after game ends

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Tic-Tac-Toe</h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {board.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        {winner ? (
          <p className="text-2xl text-green-400 mb-4">
            Winner: {winner}
          </p>
        ) : (
          <p className="text-2xl text-white mb-4">
            Next Player: {isXNext ? 'X' : 'O'}
          </p>
        )}
        <button
          onClick={resetGame}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

const Square = ({ value, onClick }) => (
  <button
    className="w-20 h-20 text-3xl font-bold text-white bg-gray-700 rounded hover:bg-gray-600"
    onClick={onClick}
  >
    {value}
  </button>
);

const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default App;
