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
                    <InputTimeForm 
                    label={'Tot. time'} 
                    example={'Ex: 04:38'}
                    handleChange={this.props.handleChange}
                    values={this.props.values}
                    errors={this.props.errors}/>
                </Col>
                <Col>
                    <Accordion>
                        <GenericCard 
                        label={'Night'} 
                        thekey={'0'}
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                        <GenericCard 
                        label={'IFR'} 
                        thekey={'1'}
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                        <GenericCard 
                        label={'Dual'} 
                        thekey={'2'}
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                        <GenericCard 
                        label={'PIC'} 
                        thekey={'3'}
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                        <GenericCard 
                        label={'Instructor'} 
                        thekey={'4'}
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                        <GenericCard 
                        label={'Copilot'} 
                        thekey={'5'}
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                    </Accordion>              
                </Col>
            </Row>
            </Container>
        );
    }
}

export default NewTimeEntry;