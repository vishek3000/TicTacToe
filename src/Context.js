import React, {useState, useEffect} from 'react';
import squares from './squares';
import checkPlayerWon from './checkPlayerWon';

const Context = React.createContext()

function ContextProvider({children}){
    const [reset, setReset] = useState(false)
    const [allSquares, setAllSquares] = useState([])
    const [playerMovesCount, setPlayerMovesCount] = useState(0)
    const [isBoardFull, setIsBoardFull] = useState(false)
    const [unselectedSquares, setUnselectedSquares] = useState([])
    const [playerWon, setPlayerWon] = useState(false)
    const [clickable, setClickable] = useState(true)

    const [board, setBoard] = useState(
        {
          y1: [0,0,0],
          y2: [0,0,0],
          y3: [0,0,0]
    })

    console.log(`Player moves: ${playerMovesCount}`)

    // set Squares
    useEffect(() =>{
        setAllSquares(squares)
        setClickable(true)
    }, [reset])

    function updateSelected(square, temp_id){
        if (temp_id === 1){
            setAllSquares(prev =>(
                prev.map(sq =>(
                    sq.id === square.id ? 
                    {...sq,
                     isSelected: true,
                     playerSelected: true
                    } : sq
                ))
            ))
        }
        else if (temp_id === 2){
            setAllSquares(prev =>(
                prev.map(sq =>(
                    sq.id === square.id ? 
                    {...sq,
                     isSelected: true,
                     computerSelected: true
                    } : sq
                ))
            ))
        }
    }

    // Every time playerMoves changes, run a function to update the unSelectedSquares array
    useEffect(() => {
        setUnselectedSquares(allSquares.filter(square => square.isSelected === false))
        if (playerMovesCount > 0){

            setClickable(false)
        }
        console.log(`clickable in the useEffect is: ${clickable}`)
    }, [playerMovesCount])

    function checkIfBoardFull(){
        if (!board.y1.includes(0) && !board.y2.includes(0) && !board.y3.includes(0) && !isBoardFull){
            setIsBoardFull(true)
        }
    }

    useEffect(() => {
        if (unselectedSquares.length > 0 && unselectedSquares.length < 9){
            //console.log("unselectedSquares")
            //console.log(unselectedSquares)
        }
    }, [unselectedSquares])

    useEffect(() =>{
        if (unselectedSquares.length > 0 && !playerWon){
            //setClickable(false)
            const index = Math.floor(Math.random() * unselectedSquares.length)
            console.log("the computers square is: ")
            console.log(unselectedSquares[index])
            console.log(unselectedSquares)
            setTimeout(() =>{
                updateBoard(unselectedSquares[index], 2)
                setClickable(prev => !prev)
                console.log(`clickable is: ${clickable}`)
            }, 1000) 
            
        }
    }, [unselectedSquares])


    // Check
    function updateBoard(square, temp_id){
        setClickable(false)

        const x = square.id % 3 // this is the 'x' position
        const y = Math.floor(square.id / 3) // this is the 'y' position

        setBoard(prev =>{
            if (y === 0){
                const newArr = prev.y1
                newArr[x] = temp_id
                return {...prev, y1: newArr}
            }
            if (y === 1){
                const newArr = prev.y2
                newArr[x] = temp_id
                return {...prev, y2: newArr}
            }
            if (y === 2){
                const newArr = prev.y3
                newArr[x] = temp_id
                return {...prev, y3: newArr}
            }
        })

        if (temp_id === 1){
            setPlayerMovesCount(prev => prev + 1)
        }

        updateSelected(square, temp_id)
    }

    
    console.log(board)
    checkIfBoardFull()
    const didPlayerWin = checkPlayerWon(board, 1)

    useEffect(() => {
        if(didPlayerWin){
            setPlayerWon(true)
        }
    }, [didPlayerWin])

    function clearBoard(){
        setBoard({
            y1: [0,0,0],
            y2: [0,0,0],
            y3: [0,0,0]
        })
        setReset(prev => !prev)
        setIsBoardFull(false)
        setPlayerWon(false)
        setPlayerMovesCount(0)
    }

    return (
        <Context.Provider value={{board, updateBoard, clearBoard, allSquares, isBoardFull, playerWon, clickable}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

