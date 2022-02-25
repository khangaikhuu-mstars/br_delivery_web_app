// import Buttons from "@restart/ui/esm/Button";
import React , {useState} from "react";
import Buttons from "./Button.js";
import TextInput from "./TextInput.js";

import { Link, NavLink , useHistory } from "react-router-dom";
import "../css/login.css";
import { Form } from "react-bootstrap";
import { userService } from "../services/userService.js";
import {useUser} from "../contexts/UserContext"

const Login = () => {
  const history = useHistory()
  const [cred , setCred] =useState()
  const [user , setUser] = useUser()
  const handleSubmit = (e) => {
    e.preventDefault();
    userService
    .userLogin({
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      if(data.success){
        userService.userInfoStorage(data)
        setUser({
          userName: data.data.name,
          email: data.data.email,
          address: data.data.address,
        })
        history.push("/")
      }else{
        alert("falied to optain login")
      }
    })
  };






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
      <NavLink className="forgotPass mb-4" to='/forget'>
      <a className="forgotPass mb-4" href="#">
        Нууц үгээ мартсан уу.
      </a>
      </NavLink>
  
      <Buttons class={"loginTabletView"} type={"submit"} name={"login"} />

      <p className="underline">эсвэл</p>

      <Link to={'/register'} className="registerButton">
        <Buttons
          className="registerButton"
          class={"loginTabletView"}
          type={"Бүртгүүлэх"}
        // onClick={() => routeChange()}
        />
      </Link>
    </div>
  );
};

export default Login;
