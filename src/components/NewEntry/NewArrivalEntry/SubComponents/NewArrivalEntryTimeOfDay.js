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
            name='TimeOfDayLanding'
            id='LandingByDay'
            onChange={e => {
                e.target.value = 'LandingByDay'
                this.props.handleChange(e)
            }}
            checked={this.props.values.TimeOfDayLanding === 'LandingByDay' ? true:false}
            isValid={this.props.values.TimeOfDayLanding && !this.props.errors.TimeOfDayLanding}
            isInvalid={!!this.props.errors.TimeOfDayLanding}
            feedback={this.props.errors.TimeOfDayLanding}
            />
            <Form.Check 
            type='radio' 
            label='Night'
            name='TimeOfDayLanding'
            id='LandingByNight'
            onChange={e => {
                e.target.value = 'LandingByNight'
                this.props.handleChange(e)
            }}
            checked={this.props.values.TimeOfDayLanding === 'LandingByNight' ? true:false}
            isValid={this.props.values.TimeOfDayLanding && !this.props.errors.TimeOfDayLanding}
            isInvalid={!!this.props.errors.TimeOfDayLanding}
            />
            </>
        );
    }
}

export default NewArrivalEntryTimeOfDay;