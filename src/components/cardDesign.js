import React from "react"
// import GameRules from "./gamerules"
function CardDesign(props){
return(
    <div className="card">
        <div className="container">
         <img src={props.image} onClick={ function() {props.random(); props.counter(props.id);}}/>
        </div>
    </div>
);
}

export default CardDesign;