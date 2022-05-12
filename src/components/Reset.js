import React, {useContext} from 'react'

import { Context } from '../Context'

const Reset = () => {
    const {clearBoard} = useContext(Context)
  return (
    <button 
        className='reset'
        onClick={clearBoard}
        >
        Reset
    </button>
  )
}

export default Reset