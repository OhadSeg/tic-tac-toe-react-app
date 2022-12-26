import Cell from "./Cell.js";
import { useState, useEffect } from "react";
const winComb = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function Board(props){

    const[whosTurn,setWhosTurn] = useState(props.currToPlay);
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    
    useEffect(() => {
        ifHasWon();
      }, [board]);
    
    function ifHasWon(){

    }   
    function playMade(){

    }

    function handleRestartGame(){
        setBoard(
            board.map( () => {
                return "";
            })
        );
        setWhosTurn("X"); 
        props.switchTurns("X"); //// useState in Game - X starting again
        props.handleIfWhoWon(""); // Function sent from game - no one won, sending empty who won msg
        
    }

    return (
        <div>
          <div className="game-board">
            <Cell turn={whosTurn} swapTurn={playMade} valueInCell={board[0]} cellIndex={0}></Cell>
            <Cell turn={whosTurn} swapTurn={playMade} valueInCell={board[1]} cellIndex={1}></Cell>
            <Cell turn={whosTurn} swapTurn={playMade} valueInCell={board[2]} cellIndex={2}></Cell>
            <Cell turn={whosTurn} swapTurn={playMade} valueInCell={board[3]} cellIndex={3}></Cell>
            <Cell turn={whosTurn} swapTurn={playMade} valueInCell={board[4]} cellIndex={4}></Cell>
            <Cell turn={whosTurn} swapTurn={playMade} valueInCell={board[5]} cellIndex={5}></Cell>
            <Cell turn={whosTurn} swapTurn={playMade} valueInCell={board[6]} cellIndex={6}></Cell>
            <Cell turn={whosTurn} swapTurn={playMade} valueInCell={board[7]} cellIndex={7}></Cell>
            <Cell turn={whosTurn} swapTurn={playMade} valueInCell={board[8]} cellIndex={8}></Cell>
          </div>
          <button className="reset-button" onClick={handleRestartGame}>
            Reset
          </button>
        </div>
      );
  }

  export default Board;
