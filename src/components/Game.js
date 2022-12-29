import React, { useState } from "react";
import Board from './Board.js';
import './MainGame.css'


function Game(props) {

    const[whosTurn,setWhosTurn] = useState("X");
    const[winner ,setWinner] = useState("");

    function handleTurnSwap(switchToPlayer){
        setWhosTurn(switchToPlayer);
    } 

    function handleIfWhoWon(winningMessage){
        setWinner(winningMessage);
    }

    return(
        <div className ="main-game">
            <h1 className = "tic-header">Tic Tac Toe Game!</h1>
            <h1>{whosTurn}  turn </h1>
            <Board currToPlay = {whosTurn} switchTurnsGame = {handleTurnSwap} handleGameOver = {handleIfWhoWon}></Board>
            <h1>{winner}</h1>

        </div>
    );
}

export default Game;