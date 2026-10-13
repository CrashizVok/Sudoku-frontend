import React, { useState } from 'react'
import "./Tile.css"
function Tile({value = 0, rowIdx = 0, colIdx = 0, ontitlevalueChange}) {
    const [newNumber, setNewNumber] = useState(0)

    const handleInputNumberchange = (e) =>{
        console.log(e);
        let newNumber = +e.target?.value || 0
        if (newNumber<0) {
            newNumber = 0
        }
        if (newNumber>9) {
            newNumber = 9
        }
        setNewNumber(newNumber)
        ontitlevalueChange(newNumber, rowIdx, colIdx)

    }
  return (
    <div className='tile'>
      {value ?? <input type="number" min={1} max={9} step={1}
      onChange={handleInputNumberchange} value={newNumber}/>}
    </div>
  )
}

export default Tile