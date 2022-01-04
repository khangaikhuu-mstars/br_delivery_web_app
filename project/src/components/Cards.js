import React from "react";
import data from ".../data/foods";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards() {

   {
    return (
      <Container>
        <Row className="cards">
          {data.data.map((data) => {
            return (
              <Card
                img={data.img}
                name={data.name}
                discountPrice={data.discountPrice}
                price={data.price}
                sales={data.sales}
                percent={data.discountPercentage}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Cards;
