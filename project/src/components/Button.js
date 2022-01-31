import React from "react";
import { Button } from "react-bootstrap";
import "../css/button.css";
const Buttons = (props) => {
  return (
    <Button
      type={props.type} className={props.class}>{props.name}</Button>
  )
};


export default Buttons;
