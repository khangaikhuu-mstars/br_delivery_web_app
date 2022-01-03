import React from "react";
import { Col } from "react-bootstrap";
import '../css/card.css'

const Card = (props) => {

    let cards = props.sales ? (
        <div className="card">
            <img src={props.img} />
            <div className="badge">{props.percent}</div>
            <p>{props.name}</p>
            <div className="price">
                <p className="activePrice">{props.discountPrice} </p>
                <strike className="strike-dark">{props.price} </strike>
            </div>
        </div>
    ) : (
        <div className="card">
            <img src={props.img} />
            <p>{props.name}</p>
            <div className="price">
                <p className="activePrice">{props.price} </p>
            </div>
        </div>
    )


    return (
        <Col xs={6} md={3}>
            {cards}
        </Col>
    )
}

export default Card;