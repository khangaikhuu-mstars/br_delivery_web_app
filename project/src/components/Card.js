import React from "react";
import '../css/card.css'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} />
            <p>{props.name}</p>
            <div className="price">
                <span id="span1">{props.discountPrice} </span>
                <span id="span2">{props.price} </span>
            </div>
        </div>
    )
}

export default Card;