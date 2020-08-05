import React, { Component } from 'react';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';

class NewLineRaCerPriv extends Component {

    fillInForm(){
        if(this.props.theKey === 'ClassTypeRating'){
            return(
                this.genericForm('Class/Type rating', 'Ex: B737 300-900', 'LicenseClassTypeRatingName')
            )
        }
        else if(this.props.theKey === 'Certificate'){
            return(
                this.genericForm('Certificate', 'Ex: TDB', 'LicenseCertificateName')
            )
        }
        else if(this.props.theKey === 'Privilege'){
            return(
                this.genericForm('Privilege', 'Ex: PBN', 'LicensePrivilegeName')
            )
        }
        else return(null)
    }

    genericForm(igt, ph, nm){
        return(
            <Form>
                <Row>
                    <Col md='4'>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>{igt}</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            name={nm}
                            placeholder={ph}
                            />
                        </InputGroup>
                    </Col>
                    <Col md='7'>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Remarks/Restriction</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            as='textarea'
                            rows='1'
                            placeholder='Ex: TDB'
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Form>
        )
    }

    render() {
        return (
            <>
              {this.fillInForm()}
            </>
        );
    }
}

export default NewLineRaCerPriv;