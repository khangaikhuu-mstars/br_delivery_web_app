import React from "react"
import { Form } from "react-bootstrap";
import TextInput from "./TextInput.js";

const ForgotPassword = () => {

    const handleSubmit = (e) => {
        console.log(e.value);
    }

    return(
        <Form onSubmit={() => handleSubmit(e => e.target.id)}>
            <TextInput id={"email"} type={"email"} name={"И-мэйл"} />
            <Buttons class={"loginTabletView"} type={"нэвтрэх"} />
        </Form>
    )
}

export default ForgotPassword;