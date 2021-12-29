import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import data from '../data/foods'

const Cards = () => {
    let dataList = data.data.map((i) => {
        return (
            <div className="col">
                <div className="cards">
                    <img src={i.img} />
                    <p>{i.name}</p>
                    <span>{i.discountPrice} </span>
                    <span>{i.price} </span>
                </div>
            </div>
        )
    })
        return(
            <div className="container">
                <div className="row-cols-sm-6 row-cols-md-3">                     
                    {dataList}
                </div>
            </div>
    )}

export default Cards;