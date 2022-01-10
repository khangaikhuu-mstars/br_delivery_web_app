import React, { useState } from "react";
import Buttons from "./Button";
import "../css/addfood.css";

const AddFood = () => {
  const [count, setCount] = useState(1);
  const [portion, setPortionSize] = useState(1);
  const [active, setActive] = useState(true);
  const [activeButton, setActiveButton] = useState('add1');

  const handlePortion = (size) => {
    setActive(() => 
        !active
    );
    setPortionSize(() => size);
  };

  const handleCounter = (num) => {
    setCount((count) => (count > 0 ? (count += num) : (count = 1)));
  };

  const sendFoodCount = (count, size) => {
    console.log("Ordered food:", count, "Portion:", size);
  };

  return (
    <div className="add-food">
      <div>
        <h5 className="modalHeader">Хэмжээ</h5>
        <div className="modalSizeButtons">
          <button
            id='add1'
            className={`sizeButton ${activeButton === 'add1' && active ? "activeButton" : ""}`}
            onClick={(event) => {
              console.log(event.target.id);
              setActiveButton("add1")
              handlePortion(1);
            }}
          >
            1 хүн
          </button>
          <button
            id='add2'
            className={`sizeButton ${activeButton === 'add2' && !active ? "activeButton" : ""}`}
            onClick={(event) => {
                console.log(event.target.id);
                setActiveButton("add2")
                handlePortion(2);
              }}
          >
            2 хүн
          </button>
        </div>
      </div>

      <h5 className="modalHeader">Тоо</h5>
      <div className="modalCounterButtons">
        <button className="counterButton" onClick={() => handleCounter(-1)}>
          -
        </button>
        <p className="counterNumber "> {count} </p>
        <button className="counterButton" onClick={() => handleCounter(1)}>
          +
        </button>
      </div>

      {/* <Buttons class={"orderTabletView"} type={"Захиалах"} /> */}
      {/* <Buttons class={'orderTabletView orderButton'} type={'Захиалах'}/> */}
      <button
        className="orderButton"
        onClick={() => sendFoodCount(count, portion)}
      >
        Захиалах
      </button>
    </div>
  );
};

export default AddFood;
