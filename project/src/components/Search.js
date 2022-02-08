import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Container } from "react-bootstrap";
import NoMatchPage from "./NoMatchPage"
import BreadcrumbHeseg from "./Breadcrumb";
import "../css/search.css"
// import "./App.css";
const Search = () => {
    const { search } = useLocation();
    const foodSearch = queryString.parse(search);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("./data/foods.json")
            .then((response) => response.json())
            .then((data) => {
                setFoods(data)
            })
    }, [])

    let result = foods.filter((n) => {
        n.name.includes(foodSearch.q)
        console.log(n.name.includes(foodSearch.q));
    })

    let oldsonEseh = () => {
        if (result !== "") {
            return (
                <Container>
                    <div className="row">
                        {result.map((data) => {
                            return (
                                <Card
                                    name={data.name}
                                    price={data.price}
                                    portion={data.portion}
                                    stock={data.stock}
                                    img={data.img}
                                    category={data.category}
                                    ingredients={data.ingredients}
                                />
                            );
                        })}
                    </div>
                </Container>
            )
        } else {
            return (
                <NoMatchPage />
            )
        }
    }

    return (
        <div>
            <BreadcrumbHeseg hool={foodSearch.q} />
            {oldsonEseh}
        </div>
    );
}
export default Search;
