import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllFood } from "../services/foodServices";

function MainDishMenu() {
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    getAllFood()
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setMainMenu(data.data)
      });
  }, []);
  console.log(mainMenu)
  let menu = mainMenu.filter((data) => data.category === "Үндсэн хоол");
  return (
    <Container>
      <div className="row">
        {menu.map((data) => {
          return (
            <Card
              name={data.name}
              price={data.price}
              portion={data.portion}
              stock={data.stock}
              img={data.tumb_img}
              category={data.category}
              ingredients={data.ingredients}
            />
          );
        })}
      </div>
    </Container>
  );
}
export default MainDishMenu;
