import React, { Component } from 'react';
import { Row, Accordion, Col, Container} from 'react-bootstrap';
import InputTimeForm from './SubComponents/InputTimeForm';
import GenericCard from './SubComponents/GenericCard';

class NewTimeEntry extends Component {
    render() {
        const { handleChange, values, errors } = this.props
        const cardLabels = ['Night', 'IFR', 'Dual', 'PIC', 'Instructor', 'Copilot']
        
        return (
            <Container fluid>
            Time allocation
            <Row>
                <Col md={3}>
                    <InputTimeForm 
                    label={'Tot. time'} 
                    example={'Ex: 04:38'}
                    handleChange={handleChange}
                    values={values}
                    errors={errors}/>
                </Col>
                <Col>
                    <Accordion>
                        {cardLabels.map((label, index) => (
                            <GenericCard
                                label={label}
                                thekey={`${index}`}
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                            />
                        ))}
                    </Accordion>              
                </Col>
            </Row>
            </Container>
        );
    }
}

export default NewTimeEntry;