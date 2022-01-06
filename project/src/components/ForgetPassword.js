import React from "react";
import Buttons from "../components/Button"
import { NavLink } from "react-router-dom";
import "../css/button.css"

const ForgetPassword = () => {

    function handleSubmit  (e) {

        
        return(

            alert("Таны mstar@example.com хаяг руу нууц үг сэргээх код илгээх болно. ")
        )
    }
    function buttonClick (){
        return (
            alert('turshilt')
        )
    }


    return (

        <NavLink className="faceItems" to="/forget">
            <div className="container my-3">
                <form action="" onSubmit={handleSubmit}  className="row flex-column mehanic-margin">
                    
                    <h4 className="col-12 text-dark border-left">НУУЦ ҮГ СЭРГЭЭХ</h4>
                    <label className="col-12 p-0 text-dark" for="passwordInput">И-мэйл</label>

                    <input type="text" id="passwordInput" className="col-6 py-2 forgetpassword1   my-3 " placeholder="и-мэйл хаягаа оруулна уу" />
                    <Buttons type="Submit"  value="Үргэлжлүүлэх" class="col-6 forgetpassword py-2" placeholder="" />
                </form>
                <button onClick={buttonClick} className="w-25" >button</button>
               
            </div>

        </NavLink>



    )

}
export default ForgetPassword