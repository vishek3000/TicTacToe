import React, {useState} from 'react';

const Context = React.createContext()

function ContextProvider({children}){

    const [board, setBoard] = useState(
        {
          y1: [0,0,0],
          y2: [0,0,0],
          y3: [0,0,0]
    })
    
    function updateBoard(id){
        const x = id % 3 // this is the 'x' position
        const y = Math.floor(id / 3) // this is the 'y' position

        setBoard(prev =>{
            if (y === 0){
                const newArr = prev.y1
                newArr[x] = 1
                return {...prev, y1: newArr}
            }
            if (y === 1){
                const newArr = prev.y2
                newArr[x] = 1
                return {...prev, y2: newArr}
            }
            if (y === 2){
                const newArr = prev.y3
                newArr[x] = 1
                return {...prev, y3: newArr}
            }
        })
    }
    console.log(board)

    function clearBoard(){
        setBoard({
            y1: [0,0,0],
            y2: [0,0,0],
            y3: [0,0,0]
        })
    }


    return (
        <Context.Provider value={{board, updateBoard, clearBoard}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

