import React, { Component } from 'react';
import {Form} from 'react-bootstrap'

class NewDepartureEntryTimeOfDay extends Component {

    render() {
        return (
            <>
            <Form>
                Time of the day
                <Form.Check
                type='radio' 
                label='Day' 
                name='TimeOfDayTakeOff'
                id='TakeOffByDay'
                feedback={this.props.errors.TimeOfDayTakeOff}
                onChange={e => {
                    e.target.value = 'TakeOffByDay'
                    this.props.handleChange(e)}}
                checked={this.props.values.TimeOfDayTakeOff === 'TakeOffByDay' ? true:false}
                isValid={this.props.values.TimeOfDayTakeOff && !this.props.errors.TimeOfDayTakeOff}
                isInvalid={!!this.props.errors.TimeOfDayTakeOff}
                />
                <Form.Check 
                type='radio' 
                label='Night' 
                name='TimeOfDayTakeOff'
                id='TakeOffByNight'
                onChange={e => {
                    e.target.value = 'TakeOffByNight'
                    this.props.handleChange(e)}}
                checked={this.props.values.TimeOfDayTakeOff === 'TakeOffByNight' ? true:false}
                isValid={this.props.values.TimeOfDayTakeOff && !this.props.errors.TimeOfDayTakeOff}
                isInvalid={!!this.props.errors.TimeOfDayTakeOff}
                />
            </Form>
            </>
        );
    }
}


export default NewDepartureEntryTimeOfDay;