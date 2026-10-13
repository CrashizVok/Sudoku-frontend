import { useState } from 'react'
import './App.css'
import Game from './components/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <h1>Sudokuuu</h1>
      <Game/>
    </div>
  )
}

export default App
