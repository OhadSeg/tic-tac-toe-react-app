import React, { useState } from "react";
import Board from './Board.js';

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
            <title> Tic-Tac-Toe - LevelUp </title>
            <h1>{whosTurn} turn </h1>
            <Board currToPlay = {whosTurn} switchTurnsGame = {handleTurnSwap} handleGameOver = {handleIfWhoWon}></Board>
            <h1>{winner}</h1>

        </div>
    );
}

export default Game;