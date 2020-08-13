import React from "react"

function CardDesign(props){
return(
    <div className="card">
        <div className="container">
         <img src={props.image} onClick={() => {}}/>
        </div>
    </div>
);
}

export default CardDesign;