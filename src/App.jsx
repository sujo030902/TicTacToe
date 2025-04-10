import React, { useState } from "react";

const initialValue = () => Array(9).fill(null);

const App = () => {
  const [board, setboard] = useState(initialValue());

  return (
    <>
      <div className="game">
        <h1>TicTacToe Game</h1>
        <button className="resetButton">Reset</button>
        <div className="board">
          {board.map((_, index) => {
            return (
              <button className="cell" key={index}>
                X
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
