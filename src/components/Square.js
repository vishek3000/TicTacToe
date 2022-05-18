import React, {useContext} from 'react'
import { Context } from '../Context'

const Square = ({square}) => {

    const {updateBoard} = useContext(Context)
    const styles = {
        ...square.styles,
        backgroundColor : square.isSelected ? "rgba(0, 0, 255, 0.424)" : {}
    }
    //console.log(`square with id of ${square.id} is now ${square.isSelected}`)

  return (
    <div 
        className="square"
        style = {styles}
        onClick={() => updateBoard(square, 1)}
        >
        {square.playerSelected && "X"}
        {square.computerSelected && "O"}
        </div>
  )
}

export default Square