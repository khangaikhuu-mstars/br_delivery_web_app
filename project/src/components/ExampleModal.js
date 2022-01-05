import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import '../css/modal.css'
function TestModal(props) {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        props.showHandler(false);
    }
    console.log(props.data)
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal dialogClassName="modal-dialog" show={show} onHide={handleClose}>
                <div className='container my-modal'>
                    <div className=''><img className='modalImage' src={props.data.img} alt=""
                    /></div>
                    <div className=''>
                        <div>
                            <h5>{props.data.name}</h5>
                            <h5>{props.data.price}</h5>
                        </div>
                        <div>
                            <h5>Орц</h5>
                            <input type="text" value={props.data.ingredients} />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}
export default TestModal
