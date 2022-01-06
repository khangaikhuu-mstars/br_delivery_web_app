import Buttons from "./Button.js";
import React from "react";
import TextInput from "./TextInput.js";

const Register = () => {

    return (
        <div className="d-flex flex-column mt-5 mb-5">
            <TextInput 
                type={'email'}
                name={'email'}    
            />
            <TextInput 
                type={'password'}
                name={'password'}    
            />
            <Buttons 
                class={'loginTabletView'}
                type={'Register'}
            />
        </div>
    )

}

export default Register;