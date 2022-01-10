import React, { useState } from "react";
import Buttons from "./Button";
import "../css/addfood.css";

const AddFood = () => {
    
  const [count, setCount] = useState(1);
  
  const handleCounter = (num) => {
      console.log(num)
    setCount(count =>
        count > 0 ? count += num : count = 1
    );
  };

  const sendFoodCount = (num) => {
      console.log('Ordered food', num);
  }

  return (
    <div className="add-food">
      <div>
        <h5 className="modalHeader">Хэмжээ</h5>
        <div className="modalSizeButtons">
          <button className="sizeButton" onClick={()=> setCount(1)}>1 хүн</button>
          <button className="sizeButton" onClick={()=> setCount(2)}>2 хүн</button>
        </div>
      </div>

      <h5 className="modalHeader">Тоо</h5>
      <div className="modalCounterButtons">
        <button className="counterButton" onClick={()=> handleCounter(-1)}>-</button>
        <p className="counterNumber "> {count} </p>
        <button className="counterButton" onClick={()=> handleCounter(1)}>+</button>
      </div>

      {/* <Buttons class={"orderTabletView"} type={"Захиалах"} /> */}
      {/* <Buttons class={'orderTabletView orderButton'} type={'Захиалах'}/> */}
      <button className='orderButton' onClick={()=> sendFoodCount(count)}>Захиалах</button>
    </div>
  );
};

export default AddFood;
