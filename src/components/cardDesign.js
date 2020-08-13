import React from "react"
import GameRules from "./gamerules"
function CardDesign(props){
return(
    <div className="card">
        <div className="container">
         <img src={props.image} onClick={() => {props.random(); props.counter();}}/>
        </div>
    </div>
);
}

export default CardDesign;