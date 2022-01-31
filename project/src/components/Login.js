// import Buttons from "@restart/ui/esm/Button";
import React, { useState } from "react";
import Buttons from "./Button.js";
import TextInput from "./TextInput.js";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "../css/login.css";
import { userService } from "../services/userService"
import { useUser } from "../contexts/UserContext"

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useUser();
  const loginHandler = (event) => {
    event.preventDefault();
    userService
      .loginUser({
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((res) => (
        res.json()
      )).then((data) => {
        if (data.success) {
          userService.userInfoStorge(data);
          setUser({
            userName: data.data.name,
            email: data.data.email,
            address: data.data.address,
          })
          history.push("/")
        } else {
          alert("failer")
        }
      })
  }
  return (
    <Form onSubmit={loginHandler} className="field-contianer d-flex flex-column mt-5 mb-5 align-items-center justify-content-center">
      <p className="col-6 hmm fw-bold ms-2 ">нэвтрэх</p>

      <TextInput type={"email"} name={"И-мэйл"} />
      <TextInput type={"password"} name={"Нууц үг"} />
      <NavLink className="forgotPass mb-4" to='/forget'>
        <a className="forgotPass mb-4" href="#">
          Нууц үгээ мартсан уу.
        </a>
      </NavLink>
      <Buttons
        class={"loginTabletView"}
        type={"Login"} />
      <p className="underline">эсвэл</p>

      <Link to={'/register'} className="registerButton">
        <Buttons
          className="registerButton"
          class={"loginTabletView"}
          type={"Бүртгүүлэх"}
        />
      </Link>
    </Form>
  );
};

export default Login;
