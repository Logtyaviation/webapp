import React, { Component } from 'react';
import {Form} from 'react-bootstrap'

class NewArrivalEntryTimeOfDay extends Component {
    render() {
        return (
            <>
            Time of the day
            <Form.Check 
            type='radio' 
            label='Day'
            name='TimeOfDayLanding'/>
            <Form.Check 
            type='radio' 
            label='Night'
            name='TimeOfDayLanding'/>
            </>
        );
    }
}

export default NewArrivalEntryTimeOfDay;