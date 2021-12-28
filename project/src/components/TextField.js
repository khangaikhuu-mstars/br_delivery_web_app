import { Form, InputGroup } from "react-bootstrap";
import { Button } from "bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const TextField = (props) => {
    // let value = props.value;
    let name = props.name;
    const eye = <AiFillEye />;
    return (
        <Form.Group className="form" controlId="exampleForm.ControlInput1">
            <Form.Label className="input-label">{name[0].toUpperCase() + name.substring(1)}</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control className="input-field" type={'email'} placeholder={`placeholder`} />
                {/* <Button >m</Button> */}
                {/* <AiFillEye />
                <AiFillEyeInvisible /> */}
            </InputGroup>
        </Form.Group>
    );
}

export default TextField;
