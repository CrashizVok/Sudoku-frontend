import React, { useState } from 'react'
import Tile from './Tile'
import "./Board.css"
function Board({children = {}}) {
    console.log(children);
    const {puzzle=[], solution=[]} = children
    console.log(puzzle);
    console.log(solution);

    const [currentboard, setCurrentBoard] = useState(Array.from({length: 9}, (val, key) =>[]))

    const checkWin = (board) =>{
        if (board == solution) {
            alert("You won")
        }

        let numbersDiff = false
        let matches = 0

        board.forEach((row) =>{
            row.forEach((num, colIdx) =>{
                if (num == solution[rowIdx][colIdx]) {
                    matches++
                }
                else{
                    numbersDiff = false
                }
            })
        })
        console.log(matches);
        
    }

    const HandletilevalueChange = (newNumber, rowIdx, colIdx) =>{
        console.log(newNumber);
        console.log(rowIdx);
        console.log(colIdx);

        //currentboard[rowIdx, colIdx] = newNumber
        setCurrentBoard((prev) =>{
            const newBoard = prev.slice()
            newBoard[rowIdx, colIdx] = newNumber
            checkWin(newBoard)
            return newBoard
        })

    }
    
  return (
    <div className='board'>
        {puzzle.map((row, rowIdx) =>(
            <div className='row' key={rowIdx}>{
                row.map((col, colIdx) =>
                    <Tile 
                key={colIdx} 
                value={col}
                rowIdx={rowIdx}
                colIdx={colIdx}
                ontitlevalueChange={HandletilevalueChange}
                />
               )
            }</div>
        ))}
    </div>
  )
}

export default Board
