import React, { useState } from "react";
import useTicTacToe from "../../hooks/useTicTacToe";



const TicTacToe = () => {

    const {board} = useTicTacToe();
  return (
    <>
      <div className="game">
        <div className="headerRow">
        <h1>TicTacToe Game</h1>
        <button className="resetButton">Reset</button>
        </div>
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

export default TicTacToe;
