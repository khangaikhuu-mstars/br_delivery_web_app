import Buttons from "./Button.js";
import React, { useState } from "react";
import TextInput from "./TextInput.js";
import "../css/login.css";
import { Form } from "react-bootstrap";
import { userService } from "../services/userService";

const Register = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    userService
      .registerUser({
        email: event.target.email.value,
        password: event.target.password.value,
        name: "lorem",
        address: "lorem5"
      })
      .then((res) => {
        res.json()
      }).then(res => {
        console.log(res)
      })
  }
  return (
    <Form onSubmit={submitHandler} className="field-contianer d-flex flex-column mt-5 mb-5 align-items-center justify-content-center">

      <p className="hmm fw-bold">Бүртгүүлэх</p>

      <TextInput type={"email"} name={"И-мэйл"} value="" />
      <TextInput type={"password"} name={"Нууц үг"} value="" />
      <TextInput type={"passwordRepeat"} name={"Нууц үг давтах"} value="" />

      <div className="agreeTo d-flex justify-content-between">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          <a className="mb-4 text-decoration-none ">Үйлчилгээний нөхцөл зөвшөөрөх</a>
        </label>
      </div>

      <Buttons class={"signupTabletView"} name={"Бүртгүүлэх"} type={"Submit"} />
    </Form>
  );
};

export default Register;
