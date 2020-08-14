import React, { Component } from 'react';
import { Col, Container, Row} from 'react-bootstrap'
import NewArrivalEntryForm from './SubComponents/NewArrivalEntryForm'
import NewArrivalEntryTimeOfDay from './SubComponents/NewArrivalEntryTimeOfDay'
import NewArrivalEntryLandingAmount from './SubComponents/NewArrivalEntryLandingAmount'

class NewArrivalEntry extends Component {
    render() {
        return (
            <Container>
            Arrival informations
                <Row>
                    <Col md={5}>
                        <NewArrivalEntryForm
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                    </Col>
                    <Col m={3}>
                        <NewArrivalEntryTimeOfDay
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                    </Col>                   
                    <Col md={4}>
                        <NewArrivalEntryLandingAmount
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NewArrivalEntry;