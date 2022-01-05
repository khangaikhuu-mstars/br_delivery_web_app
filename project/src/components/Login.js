// import Buttons from "@restart/ui/esm/Button";
import React from "react";
import Buttons from "./Button.js";
import TextInput from "./TextInput.js";

const Login = () => {

    return (
        <div className="mt-20">
            <TextInput 
                type={'email'}
                name={'email'}    
            />
            <TextInput 
                type={'password'}
                name={'password'}    
            />
            <Buttons 
                className={'loginTabletView'}
            />
        </div>
    )

}

export default Login;