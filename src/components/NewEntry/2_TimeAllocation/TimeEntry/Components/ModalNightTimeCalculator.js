import React from 'react';
import { Modal, Button, FormControl, Col, Row } from 'react-bootstrap';

const ModalNightTimeCalculator = (props) => {
    const { timeOfTheDay, setShow, handleClose } = props

    return (
        <>
            <Modal 
            show={setShow} 
            onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Night time calculator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            {timeOfTheDay === 'day' ? 'Sunset time':null}
                            {timeOfTheDay === 'night' ? 'Sunrise time':null}
                            <FormControl 
                            placeholder='Ex: 19:48'
                            />
                        </Col>
                        <Col>
                            Equivalent night time
                            <FormControl 
                            placeholder='01:35' 
                            disabled/>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                    <Button>Import to the page</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalNightTimeCalculator;