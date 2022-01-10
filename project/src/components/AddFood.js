import React, { useState } from "react";
import Buttons from "./Button";
import "../css/addfood.css";

const AddFood = () => {
  const [count, setCount] = useState(1);
  const [portion, setPortionSize] = useState(1);
  const [active, setActiveButton] = useState(true);

  const handlePortion = (size) => {
    setActiveButton(() => !active);
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
            className={`sizeButton ${active ? "activeButton" : ""}`}
            onClick={() => handlePortion(1)}
          >
            1 хүн
          </button>
          <button
            className={`sizeButton ${!active ? "activeButton" : ""}`}
            onClick={() => handlePortion(2)}
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
