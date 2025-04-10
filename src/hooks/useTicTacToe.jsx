import { useState } from "react";

const initialValue = () => Array(9).fill(null);

const useTicTacToe = ()=>{
    const [board, setboard] = useState(initialValue());
    const [isNext, setisNext] = useState(true);

    const winning_Patterns = [];
    
    const calculateWinner = () => {}

    const handleClick = () => {}

    const getStatusMessage = () => {}

    const resetGame = () => {}

    return {board, calculateWinner, handleClick, getStatusMessage, resetGame}
};

export default useTicTacToe; 
