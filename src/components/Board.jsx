import React from 'react'
import Tile from './Tile'
import "./Board.css"
function Board() {
  return (
    <div className='board'>
        <div className='row'>
            <Tile value={2}/>
            <Tile value={null}/>
            <Tile/>
        </div>

        <div className='row'>
            <Tile/>
            <Tile/>
            <Tile/>
        </div>

        <div className='row'>
            <Tile/>
            <Tile/>
            <Tile/>
        </div>
    </div>
  )
}

export default Board
