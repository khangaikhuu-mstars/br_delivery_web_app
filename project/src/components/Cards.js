import React from "react";
import data from '../data/foods'
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = () => {

    return (
        data.data.map((i) => {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <Card
                                img={i.img}
                                name={i.name}
                                discountPrice={i.discountPrice}
                                price={i.price}
                            />
                        </div>
                    </div>
                </div>
            )

        })
    )
}

export default Cards;