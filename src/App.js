import './App.css';
import React, {useContext} from 'react'
import { nanoid } from 'nanoid'

import Square from "./components/Square"
import Reset from './components/Reset';

import {Context} from "./Context"

function App() {

  const {allSquares} = useContext(Context)

  // Generate squares
  const squareElements = allSquares.map((square) => (
    <Square 
      key={nanoid()} 
      square={square}
    />)
  )

  //console.log(squareElements)
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className='board-container'>
        {squareElements}
      </div>
      <Reset />
    </div>

  );
}

export default App;
