// import Buttons from "@restart/ui/esm/Button";
import React from "react";
import Buttons from "./Button.js";
import TextInput from "./TextInput.js";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {


  // const history = useHistory();
  // const routeChange = () => {
  //   let path = "/register";
  //   history.push(path);
  // };


  return (
    <div className="field-contianer d-flex flex-column mt-5 mb-5 align-items-center justify-content-center">
      <p className="col-6 hmm fw-bold ms-2 ">нэвтрэх</p>

      <TextInput type={"email"} name={"И-мэйл"} />
      <TextInput type={"password"} name={"Нууц үг"} />

      <a className="forgotPass mb-4" href="#">
        Нууц үгээ мартсан уу.
      </a>

      <Buttons class={"loginTabletView"} type={"Login"} />
      <p className="underline">эсвэл</p>

      <Link to={'/register'} className="registerButton">
        <Buttons
          className="registerButton"
          class={"loginTabletView"}
          type={"Register"}
        // onClick={() => routeChange()}
        />
      </Link>
    </div>
  );
};

export default Login;