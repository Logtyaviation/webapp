import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <>
            <Row>
                <Col md={2}/>
                <Col md={2}/>
                <Col md={2}>Name</Col>
                <Col md={2}/>
                <Col md={2}>Pilot in command</Col>
            </Row>
            </>
        );
    }
}

export default Header;