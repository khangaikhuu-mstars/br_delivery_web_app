import React, { useState } from "react";
import Buttons from "../components/Button"
import { NavLink } from "react-router-dom";
import "../css/forgetpassword.css"


const ForgetPassword = () => {

    const [show, setSHow] = useState(true)
    const onPassword = () => setSHow(!show)

    return (


        <div className="container my-3">
            <form action="" className="row flex-column mehanic-margin">
                <NavLink className="faceItems ps-0" to="/forget">
                    <h4 className="col-12 ps-3 text-dark border-left">НУУЦ ҮГ СЭРГЭЭХ</h4>
                </NavLink >
                <div className={show ? "hideclass" : "showclass py-2 my-2  p-0 " }>
                    <label className="col-12 p-0 text-dark" for="passwordInput">Нууц үг сэргээх код</label>
                    <input type="password" className=" col-6 py-2 ps-2 forgetpassword1   my-3 "   placeholder="Нууц үг сэргээх" />
                </div>
                <div className={show ? " showclass py-2 my-2  p-0 " : "hideclass "}>
                    <label className="col-12 p-0 text-dark" for="passwordInput">И-мэйл</label>
                    <input type="text" id="passwordInput" className="col-6 ps-2 py-2 forgetpassword1   my-3 " placeholder="И-мэйл хаягаа оруулна уу" />
                </div>


                <input type="button" onClick={onPassword} className="forgetpassword py-2 col-6" value="Үргэлжлүүлэх" />
            </form>


        </div>





    )

}
export default ForgetPassword