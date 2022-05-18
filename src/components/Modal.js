import React, {useContext} from 'react'
import { Context } from '../Context'

const Modal = () => {
    const {playerWon, clearBoard} = useContext(Context)
    const styles = {
        display: playerWon ? "block" : "none"
    }
  return (
    <div className='modal'>
        <div className='modal-content'>
            <span 
                className="close"
                style={styles}
                onClick={clearBoard}
                 >
                &times;
            </span>
            <p>You won!</p>
        </div> 
    </div>
  )
}

export default Modal