import { useState } from "react";

const initialValue = () => Array(9).fill(null);

const useTicTacToe = ()=>{
    const [board, setboard] = useState(initialValue());
    const [isNext, setisNext] = useState(true);

    const winning_Patterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
    const calculateWinner = () => {}

    const handleClick = (index) => {
        
    }

    const getStatusMessage = () => {}

    const resetGame = () => {}

    return {board, calculateWinner, handleClick, getStatusMessage, resetGame}
};

export default useTicTacToe; 
