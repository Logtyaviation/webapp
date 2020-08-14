import React, { Component } from 'react';
import { Col, Row, Container} from 'react-bootstrap'
import NewDepartureEntryTimeOfDay from './SubComponents/NewDepartureEntryTimeOfDay'
import NewDepartureEntryTakeOff from './SubComponents/NewDepartureEntryTakeOff';
import NewDepartureEntryForm from './SubComponents/NewDepartureEntryForm'

class NewDepartureEntry extends Component {

    render() {
        return (
            <Container>
                Departure informations
                <Row>
                    <Col md={5}>
                        <NewDepartureEntryForm
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}/>
                    </Col>
                    <Col md={3}>
                        <NewDepartureEntryTimeOfDay
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}
                        />
                    </Col> 
                    <Col md={4}>
                        <NewDepartureEntryTakeOff
                        handleChange={this.props.handleChange}
                        values={this.props.values}
                        errors={this.props.errors}
                        />
                    </Col>
                </Row>   
            </Container>
        );
    }
}

export default NewDepartureEntry;