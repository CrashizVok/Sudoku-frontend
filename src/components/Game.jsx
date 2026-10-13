import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify"
import Board from './Board'

function Game() {
    const [gameData, setGameData] = useState({})
    
    useEffect(() =>{
        fetch("http://localhost:8080/sudoku")
        .then(async (json) =>{
            const data = await json.json()
            setGameData(data)
            console.log(data);
            
        })
        .catch(console.warn)
        .finally(() =>{})
    }, [])
  return (
    <div>
        {/*<p>TODO : JSON.stringify(gameData)</p>*/}
      <Board>{gameData}</Board>
      <ToastContainer
      position="top-center"
      />
    </div>
  )
}

export default Game
