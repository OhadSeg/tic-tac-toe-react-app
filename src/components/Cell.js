import React from "react";
import "./Cell.css"

function Cell (props){

    function handleClick(e){
        
        if(props.valueInCell===""){
            props.switchTurnsBoard(props.cellIndex);
        }
    }

    return(
        <div className="cell" onClick ={handleClick}>
        <h1>{props.valueInCell}</h1>
        </div>
    );

}
export default Cell;