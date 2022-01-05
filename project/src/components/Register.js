import Button from "@restart/ui/esm/Button";
import React from "react";
import TextInput from "./TextInput.js";

const Register = () => {

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
            <Button />
        </div>
    )

}

export default Register;