import { useState } from "react";

const initialValue = () => Array(9).fill(null);

const useTicTacToe = ()=>{
    const [board, setboard] = useState(initialValue());
    const [isNext, setisNext] = useState(true);

    const winning_Patterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
    const calculateWinner = () => {
        for(let patterns of winning_Patterns){
            const [a,b,c] = patterns;
            if (board[a] && board[a] == board[b] && board[a]==board[c]){
                return board[a];
            }
        }
        return null;
    }

    const handleClick = (index) => {
        if(board[index] || calculateWinner()){
            const newBoard = [...board];
            newBoard[index] = isNext ? "X" : "O";
            setboard(newBoard);
            setisNext(!isNext); 
        }

    }

    const getStatusMessage = () => {}

    const resetGame = () => {}

    return {board, calculateWinner, handleClick, getStatusMessage, resetGame}
};

export default useTicTacToe; 
