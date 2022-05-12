import React, {useContext} from 'react'
import { Context } from '../Context'

const Square = ({square}) => {

    const {updateBoard} = useContext(Context)
    //console.log(`square with id of ${square.id} is now ${square.isSelected}`)

  return (
    <div 
        className="square"
        onClick={() => updateBoard(square)}
        >
        {square.isSelected && "X"}
        </div>
  )
}

export default Square