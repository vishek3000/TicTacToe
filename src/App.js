import './App.css';
import React, {useContext} from 'react'
import { nanoid } from 'nanoid'
import Square from "./components/Square"
import Reset from './components/Reset'
import Modal from "./components/Modal"
import {Context} from "./Context"

function App() {
  const {allSquares, isBoardFull, playerWon, clickable} = useContext(Context)
  const styles = {pointerEvents: clickable ? "auto" : "none"}
  // Generate squares
  const squareElements = allSquares.map((square) => (
    <Square 
      key={nanoid()} 
      square={square}
    />)
  )
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div style={styles} className='board-container'>
        {squareElements}
      </div>
      {isBoardFull && <Reset />}
      {playerWon && <Modal />}
    </div>
  );
}

export default App;
