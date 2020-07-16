import React, { Component } from 'react';
import {Form, Row, Col, Container, InputGroup } from 'react-bootstrap';

class DateOfBirth extends Component {

    listDisplayer(start, end){
        let array=[]
        for(let n=start;n<=end+1;n++){
            let childrenarray=[]
            for(let m=start;m<end+1;m++){
                childrenarray.push(
                    <option>{m}</option>
                )
            }
            array.push(childrenarray)
            return(
                array
            )
        }
    }

    render() {
        return (
            <Container fluid>
                <Form>
                    <Form.Group>
                        <Form.Label>Date of birth</Form.Label>
                        <Row>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Day</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control as='select'>
                                        {this.listDisplayer(1,31)}
                                    </Form.Control>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Month</InputGroup.Text>
                                    </InputGroup.Prepend>
                                <Form.Control as='select'>
                                    {this.listDisplayer(1,12)}
                                </Form.Control>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Year</InputGroup.Text>
                                    </InputGroup.Prepend>
                                <Form.Control as='select'>
                                    {this.listDisplayer(1900, 2020)}
                                </Form.Control>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default DateOfBirth;