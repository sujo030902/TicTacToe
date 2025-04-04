import React from 'react'
import { useState } from 'react'



const Board = () => {
    function Square(){
        const [value, setValue] = useState(null);
        function handleClick(){
            setValue('X');
        }
        return (<button className='square' onClick={handleClick}>{value}</button>)
    }
  return (
    <>
     <div className='game'>
     <Square />
     <Square />
     <Square />
     <Square />
     <Square />
     <Square />
     <Square />
     <Square />
     <Square />
     </div>
    </>
  )
}

export default Board
