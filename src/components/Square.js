import React, {useState, useContext} from 'react'

import { Context } from '../Context'



const Square = (props) => {
    const [selected, setSelected] = useState(false)

    const {updateBoard} = useContext(Context)


    function handleSelected(id){
        updateBoard(id)
        setSelected(true)
    }

    console.log(`square with id of ${props.id} is now ${selected}`)



  return (
    <div 
        className="square"
        onClick={() => handleSelected(props.id)}
        >
        {selected && "X"}
        </div>
  )
}

export default Square