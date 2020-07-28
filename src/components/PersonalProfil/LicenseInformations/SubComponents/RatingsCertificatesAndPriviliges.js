import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import AddButtonRaCerPriv from './AddButtonRaCerPriv';

class RatingsCertificatesAndPriviliges extends Component {
    render() {
        return (
            <Container fluid>
                Ratings, certificates and priviliges :
                <Row>
                    <AddButtonRaCerPriv/>
                </Row>
            </Container>
        );
    }
}

export default RatingsCertificatesAndPriviliges;