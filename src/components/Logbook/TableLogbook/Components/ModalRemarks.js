import React from 'react' 
import { Button, Modal, Row, Container } from 'react-bootstrap'

const ModalRemarks = (props) => {

    return(
        <Modal show={props.show} onHide={props.handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Remarks</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>{props.data.PICUSTime !== '' ? props.data.PICUSTime+' hours of PIC performed under supervision (PICUS)':null}</Row>
                            <Row>{props.data.RemarkLineCheck !== '' ? 'Line check performed on this flight':null}</Row>
                            <Row>{props.data.RemarkAutoland !== '' ? 'Autoland performed on this flight':null}</Row>
                            <Row>{props.data.RemarkMonitoredApproach !== '' ? 'Monitored approach performed on this flight':null}</Row>
                            <Row>{props.data.RemarkGoAround !== '' ? 'Go around performed on this flight':null}</Row>
                            <Row>{props.data.RemarkDiversion !== '' ? 'Diversion performed on this flight':null}</Row>
                            <Row>{props.data.TextRemarks}</Row>
                            <Row>Crew members on this flight :</Row>
                            {props.crewMembersMapper}
                        </Container>
                    </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
    )
}

export default ModalRemarks