import {useEffect , useState } from "react";
import Card from "../components/Card"

function Sales (){
    const [sale , setSale] = useState([])
    useEffect(()=>{
        fetch("../data/foods.json")
        .then((response) =>response.json())
        .then((data) => setSale(data))
    },[])
    let mainSales  = sale.filter((i) => i.sales === true).slice(0 , 4)
    return(
        <div className="row">
           {mainSales.map((i)=>(
               
                   <Card
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
export default Sales