import React from "react";
import useTicTacToe from "../../hooks/useTicTacToe";

const TicTacToe = () => {
  const { board, calculateWinner, resetGame, getStatusMessage, handleClick } = useTicTacToe();

  return (
    <>
      <div className="game">
        <div className="headerRow">
          <h1>TicTacToe Game</h1>
          <button className="resetButton" onClick={resetGame}>Reset</button>
        </div>

        {/* Display the game status */}
        <p className="status">{getStatusMessage()}</p>

        <div className="board">
          {board.map((b, index) => {
            return (
              <button
                className="cell"
                key={index}
                onClick={() => handleClick(index)}
                disabled={b != null}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
