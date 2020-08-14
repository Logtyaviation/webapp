import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RemarksRadio from './SubComponents/RemarksRadio';
import TextArea from './SubComponents/TextArea';

class NewRemarkEntry extends Component {
    render() {
        return (
            <Container fluid>
            Remark(s)
            <Row>
                <Col>
                    <TextArea
                    handleChange={this.props.handleChange}
                    values={this.props.values}/>
                </Col>
                <Col md={2}>
                    <RemarksRadio
                    handleChange={this.props.handleChange}
                    values={this.props.values}/>
                </Col>
            </Row>
            </Container>
        );
    }
}

export default NewRemarkEntry;