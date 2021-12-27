import React from "react";

const Buttons = (props) => {

    return(
            <button className={props.class}>{props.type}</button>
    )
}

export default Buttons;