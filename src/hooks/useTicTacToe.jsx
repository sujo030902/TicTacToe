import { useState } from "react";

const initialValue = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialValue());
  const [isNext, setIsNext] = useState(true);

  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
  ];

  const calculateWinner = () => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return winner ('X' or 'O')
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner()) return; // Prevent click if cell already filled or game over

    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);
    setIsNext(!isNext); // Switch player
  };

  const getStatusMessage = () => {
    const winner = calculateWinner();
    
    if (winner) {
      return `Winner: ${winner}`;
    }

    if (board.every(cell => cell !== null)) {
      return "It's a draw!";
    }

    return `Next player: ${isNext ? "X" : "O"}`;
  };

  const resetGame = () => {
    setBoard(initialValue());
    setIsNext(true);
  };

  return { board, calculateWinner, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToe;
