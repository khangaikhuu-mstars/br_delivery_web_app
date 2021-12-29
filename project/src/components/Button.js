import React from "react";
import { Button } from "react-bootstrap";
import "../css/button.css";
const Buttons = (props) => {
  return <Button className={props.class}>{props.type}</Button>;
};

export default Buttons;
