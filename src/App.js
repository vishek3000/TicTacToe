import './App.css';
import React from 'react'
import { nanoid } from 'nanoid'

import Square from "./components/Square"
import Reset from './components/Reset';




function App() {

  // Generate squares
  const squareElements = [...Array(9)].map((x, index) => (<Square key={nanoid()} id={index} />))
  


  console.log(squareElements)
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
