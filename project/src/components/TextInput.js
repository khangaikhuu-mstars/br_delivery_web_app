import { Form, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const TextInput = (props) => {
    // let value = props.value;
    let name = props.name;

    const eye = <AiFillEye />;
    const closedEye = <AiFillEyeInvisible />;

    return (
        <Form.Group className="form mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label className="input-label">{name[0].toUpperCase() + name.substring(1)}</Form.Label>
            <InputGroup className="mb-2">
                <Form.Control className="input-field" type={'email'} placeholder={`placeholder`} />
                <Button className="passToggle">
                    <i>{eye}</i>
                </Button>
            </InputGroup>
        </Form.Group>
    );
}

export default TextInput;