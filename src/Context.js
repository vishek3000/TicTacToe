import React, {useState, useEffect} from 'react';
import squares from './squares';


const Context = React.createContext()

function ContextProvider({children}){
    const [reset, setReset] = useState(false)
    const [allSquares, setAllSquares] = useState([])

    const [board, setBoard] = useState(
        {
          y1: [0,0,0],
          y2: [0,0,0],
          y3: [0,0,0]
    })

    // set Squares
    useEffect(() =>{
        setAllSquares(squares)
    }, [reset])

    function updateSelected(square){
        setAllSquares(prev =>(
            prev.map(sq =>(
                sq.id === square.id ? {...sq, isSelected: !sq.isSelected} : sq
            ))
        ))
    }

    function updateBoard(square){
        const x = square.id % 3 // this is the 'x' position
        const y = Math.floor(square.id / 3) // this is the 'y' position

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
        updateSelected(square)
        computersMove()
        //checkIfBoardFull()
    }
    
    console.log(board)

    function clearBoard(){
        setBoard({
            y1: [0,0,0],
            y2: [0,0,0],
            y3: [0,0,0]
        })
        setReset(prev => !prev)
        //setBoardFull(false)
    }

    function computersMove(){
        const unselectedSquares = allSquares.filter(square => !square.isSelected)
        console.log(unselectedSquares)
        // Select a random square from 0 to 8
        // check if squares value is zero
        // change squares value to 2 and put a 'O' inside
    }

    return (
        <Context.Provider value={{board, updateBoard, clearBoard, allSquares}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

