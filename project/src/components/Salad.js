import React from "react";
import { useEffect, useState } from "react";
import Cards from "./Card";
function Salad() {
    const [mainMenu, setMainMenu] = useState([])
    useEffect(() => {
        fetch("../data/foods.json")
            .then((response) => response.json())
            .then((data) => setMainMenu(data));
    }, []);
    let menu = mainMenu.filter((m) => m.category === "салад ба зууш").slice(0,4)
    return (
            <div className="row">
                {menu.map((i) => (
                    
                        <Cards
                            img={i.img}
                            name={i.name}
                            discountPrice={i.discountPrice}
                            price={i.price}
                            sales={i.sales}
                            percent={i.discountPercentage}
                        />  
              
                ))}
        </div>
    )
}
export default Salad;