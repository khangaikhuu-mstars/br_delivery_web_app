// import Buttons from "@restart/ui/esm/Button";
import React from "react";
import Buttons from "./Button.js";
import TextInput from "./TextInput.js";

const Login = () => {

    return (
        <div className=" d-flex flex-column mt-5 mb-5">
            <TextInput 
                type={'email'}
                name={'email'}    
            />
            <TextInput 
                type={'password'}
                name={'password'}    
            />
                <p></p>
            <Buttons 
                class={'loginTabletView'}
                type={'Login'}
            />
            <p></p>
            <p>or</p>
            <Buttons 
                class={'loginTabletView'}
                type={'Register'}
            />
        </div>
    )

}

export default Login;