import React from "react";
import { Button } from "react-bootstrap";
import "../css/button.css";
const Buttons = (props) => {
  return (
    <Button className={props.class} type={props.type}>
      {props.name}
    </Button>
  );
};

export default Buttons;
