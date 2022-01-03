import React from "react";
import { Col } from "react-bootstrap";
import '../css/card.css'

const Card = (props) => {
    return (
        <Col xs={6} md={3}>
            <div className="card">
                <img src={props.img} />
                <p>{props.name}</p>
                <div className="price">
                    <span id="span1">{props.discountPrice} </span>
                    <span id="span2">{props.price} </span>
                </div>
            </div>
        </Col>
    )
}

export default Card;