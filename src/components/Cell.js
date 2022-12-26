import React, { useState } from "react";

function Cell (props){

    function handleClick(){
        
        props.swtichTurns(props.clickedIdx)
    }

    return(
        <div className="cell" onClick ={handleClick}>
        <h1>{props.valueInCell}</h1>
        </div>
    );

}
export default Cell;