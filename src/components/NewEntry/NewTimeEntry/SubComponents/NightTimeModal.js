import React, { Component } from 'react';
import { Modal, Button, FormControl, Col, Row } from 'react-bootstrap';

class NightTimeModal extends Component {
    constructor(props){
        super(props)
        this.state=({
            setShow:props.setShow,
            handleClose:props.handleClose,
            timeOfTheDay:props.timeOfTheDay,
        })
    }

    render() {
        return (
            <>
            <Modal show={this.props.setShow} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Night time calculator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                        {this.props.timeOfTheDay === 'day' ? 'Sunset time':null}
                        {this.props.timeOfTheDay === 'night' ? 'Sunrise time':null}
                        <FormControl placeholder='Ex: 19:48'/>
                        </Col>
                        <Col>
                        Equivalent night time
                        <FormControl placeholder='01:35' disabled/>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={this.props.handleClose}>Close</Button>
                    <Button>Import to the page</Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default NightTimeModal;