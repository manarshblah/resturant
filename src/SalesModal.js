import React, { useState } from 'react';
import { Button, Modal, Col, Form, Row } from 'react-bootstrap';


const SalesModal = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="border btn" onClick={handleShow}>
                More
            </Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header  closeButton>
                    <Modal.Title className='modal.Title'>More About our food</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                       

                        <Row className="mb-3">
                            <Col lg="6" sm="12" xs="12" md="12" >
                               <img src={props.img} className="img" />
                            </Col>

                            <Col lg="6" sm="12" xs="12" md="12" >
                                <div style={{border:"1px dashed #444",backgroundColor:"yellow",margin:"10px"}}>{props.text}</div>
                            </Col>
                        </Row>


                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>If You Have Any Notes On Our Services , You Can Write them In The Box : </Form.Label>
                            <Form.Control type='text' placeholder="Your Notes" />
                        </Form.Group>


                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sumbit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SalesModal
