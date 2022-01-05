import React from "react";
import { Col } from "react-bootstrap";
import '../css/card.css'

const Card = (props) => {

    let cards = props.sales ? (
        <div className="card">
            <img src={props.img} alt=""/>
            <div className="badge">{props.percent}%</div>
            <p>{props.name}</p>
            <div className="price">
                <p className="activePrice">{new Intl.NumberFormat().format(props.price-props.price * props.percent / 100)}₮ </p>
                <strike className="strike-dark">{new Intl.NumberFormat().format(props.price)}₮ </strike>
            </div>
        </div>
    ) : (
        <div className="card">
            <img src={props.img} />
            <p>{props.name}</p>
            <div className="price">
                <p className="activePrice">{new Intl.NumberFormat().format(props.price)}₮ </p>
            </div>
        </div>
    )

    return (
        <Col xs={6} md={3} className="mb-4">
            {cards}
        </Col>
    )
}

export default Card;