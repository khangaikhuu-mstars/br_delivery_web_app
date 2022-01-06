// import Buttons from "@restart/ui/esm/Button";
import React from "react";
import Buttons from "./Button.js";
import TextInput from "./TextInput.js";
import { Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {

    return (
        <div className="field-contianer d-flex flex-column mt-5 mb-5 align-items-center justify-content-center">
            <TextInput 
                type={'email'}
                name={'И-мэйл'}    
            />
            <TextInput 
                type={'password'}
                name={'Нууц үг'}    
            />
            <a className="forgotPass mb-4" href="#">Нууц үгээ мартсан уу.</a>
                {/* <p></p> */}
            <Buttons 
                class={'loginTabletView'}
                type={'Login'}
            />
            {/* <p></p> */}
            <p className="underline">эсвэл</p>
            <Link to="/register">
                <Buttons 
                    class={'loginTabletView'}
                    type={'Register'}
                />
            </Link>
        </div>
    )

}

export default Login;