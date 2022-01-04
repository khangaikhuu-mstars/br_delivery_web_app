import React, { useEffect, useState } from "react";
import Card from "./Card";
function MainDishMenu() {
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setMainMenu(data));
  }, []);
  console.log(mainMenu)
  let menu = mainMenu.filter(j => j.category === "үндсэн хоол")
  return (
    <div className="row">
      {menu.map((data) => {
        return (
         
            <Card
              name={data.name}
              price={data.price}
              portion={data.portion}
              stock={data.stock}
              img={data.img}
              category={data.category}
            />
         
        
        );
      })}
    </div>
  );
}
export default MainDishMenu;
