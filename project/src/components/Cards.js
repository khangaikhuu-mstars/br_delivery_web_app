import React from "react";
import data from '../data/foods'
import Card from "./Card";
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends React.Component {

    render() {
        return (
            <Container>
                <Row className="cards">
                    {data.data.map((i) => {
                        return (
                            <Card
                                img={i.img}
                                name={i.name}
                                discountPrice={i.discountPrice}
                                price={i.price}
                            />
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default Cards;