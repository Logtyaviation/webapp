import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TextArea from './Components/TextArea';
import RemarksRadio from './Components/RemarksRadio';

const RemarksEntry = (props) => {
    const { handleChange, values, errors } = props

    return (
        <Container fluid>
        Remark(s)
        <Row>
            <Col>
                <TextArea
                handleChange={handleChange}
                values={values}
                errors={errors}/>
            </Col>
            <Col md={2}>
                <RemarksRadio
                handleChange={handleChange}
                values={values}/>
            </Col>
        </Row>
        </Container>
    );
}

export default RemarksEntry;