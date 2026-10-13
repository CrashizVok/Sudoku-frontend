import React from 'react'
import "./Tile.css"
function Tile({value = 1}) {
  return (
    <div className='tile'>
      {value}
    </div>
  )
}

export default Tile
1