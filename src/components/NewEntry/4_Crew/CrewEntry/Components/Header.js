import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <>
            <Row>
                <Col md={2}/>
                <Col md={10}>
                    <Row>
                        <Col md={2}>
                            Rank
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col md={9}>
                                    Name
                                </Col>
                                <Col md={3}>
                                    Pilot in command
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </>
        );
    }
}

export default Header;