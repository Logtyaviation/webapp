import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <>
            <Row>
                <Col md={2}></Col>
                <Col md={10}>
                    <Row>
                    <Col md={3}>
                        Rank
                    </Col>
                    <Col md={5}>
                        Name
                    </Col>
                    <Col md={2}>
                        Pilot in command
                    </Col>
                    <Col></Col>
                    </Row>
                </Col>
            </Row>
            </>
        );
    }
}

export default Header;