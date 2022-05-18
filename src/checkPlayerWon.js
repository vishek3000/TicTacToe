
export default function checkPlayerWon(board, id){
    // Condition 1: y1 all ones
    if (board.y1.every(v => v === id)){
        console.log("You won on the first horizontal!")
        return true
    }
    // Condition 2: y2 all ones
    else if (board.y2.every(v => v === id)){
        console.log("You won on the second horizontal!")
        return true
    }
    // Condition 3: y3 all ones
    else if (board.y3.every(v => v === id)){
        console.log("You won on the third horizontal!")
        return true
    }
    // Condition 4: x1 all ones
    else if (board.y1[0] === id && board.y2[0] === id && board.y3[0] === id){
        console.log("You won off the first vertical!")
        return true
    }
    // Condition 5: x2 all ones
    else if (board.y1[1] === id && board.y2[1] === id && board.y3[1] === id){
        console.log("You won off the second vertical!")
        return true
    }
    // Condition 6: x3 all ones
    else if (board.y1[2] === id && board.y2[2] === id && board.y3[2] === id){
        console.log("You won off the third vertical!")
        return true
    }
    // Condition 7: (x1, y1), (x2, y2), (x3, y3) all ones
    else if (board.y1[0] === id && board.y2[1] === id && board.y3[2] === id){
        console.log("You won off the first diagonal!")
        return true
    }
    // Condition 8: (x3, y1), (x2, y2), (x1, y3) all ones
    else if (board.y1[2] === id && board.y2[1] === id && board.y3[0] === id){
        console.log("You won off the second diagonal!")
        return true
    }
    return false
}