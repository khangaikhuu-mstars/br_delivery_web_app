import { Form, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const TextInput = (props) => {
    // let value = props.value;
    let name = props.name;
    let type = props.type;

    const show = <img type='button' src="../icons/show-pass.png"></img>;
    const hide = <img src="../icons/hide-pass.png"></img>;

    const isPass = false;
    const isTextfield = false;

    let defInput =
        <div className="input-container d-flex">
            <Form.Control className="input-field" type={type} placeholder="name@example.com" />
        </div>
    ;

    if (type === 'password') defInput =
        <div className="input-container d-flex">
            <Form.Control className="input-field" type={type} placeholder="name@example.com" />
            <span className="passToggle">
                {show}
            </span>
        </div>
    ;
    
    if (type === 'textField') defInput =
        <div className="input-container d-flex">
            <Form.Control className="input-field textarea" as="textarea" aria-label="With textarea" />
        </div>
    ;

    return (
        <Form.Group className="form mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="input-label">{name[0].toUpperCase() + name.substring(1)}</Form.Label>
            {defInput}
        </Form.Group>
    );
}

TextInput.defaultProps = {
    type: "text",
    // name: ''

}

export default TextInput;
