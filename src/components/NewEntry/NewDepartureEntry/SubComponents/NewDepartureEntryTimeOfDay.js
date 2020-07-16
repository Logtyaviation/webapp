import React, { Component } from 'react';
import {Form} from 'react-bootstrap'

class NewDepartureEntryTimeOfDay extends Component {

    render() {
        return (
            <>
            <div>Time of the day</div>
            <Form.Check
            type='radio' 
            label='Day' 
            name='TimeOfDayTakeOff'/>
            <Form.Check 
            type='radio' 
            label='Night' 
            name='TimeOfDayTakeOff'/>
            </>
        );
    }
}

export default NewDepartureEntryTimeOfDay;