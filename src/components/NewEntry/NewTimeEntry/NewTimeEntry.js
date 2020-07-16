import React, { Component } from 'react';
import { Row, Accordion, Col, Container} from 'react-bootstrap';
import InputTimeForm from './SubComponents/InputTimeForm';
import GenericCard from './SubComponents/GenericCard';

class NewTimeEntry extends Component {
    render() {
        return (
            <Container fluid>
            Time allocation
            <Row>
                <Col md={3}>
                    <InputTimeForm label={'Total time'} example={'Ex: 04:38'}/>
                </Col>
                <Col>
                    <Accordion>
                        <GenericCard label={'Night time'} thekey={'0'}/>
                        <GenericCard label={'IFR'} thekey={'1'}/>
                        <GenericCard label={'Dual'} thekey={'2'}/>
                        <GenericCard label={'PIC'} thekey={'3'}/>
                        <GenericCard label={'Instructor'} thekey={'4'}/>
                        <GenericCard label={'Co-pilot'} thekey={'5'}/>
                    </Accordion>              
                </Col>
            </Row>
            </Container>
        );
    }
}

export default NewTimeEntry;