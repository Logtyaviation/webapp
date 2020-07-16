import React, { Component } from 'react';
import {FormControl, Form} from 'react-bootstrap'

class NewDepartureEntryTakeOff extends Component {

    constructor(props){
        super(props)
        this.state={
            DisplayForm:'',
            SelectedOption:''
        }
    this.handleChangeRadio = this.handleChangeRadio.bind(this)
    this.handleChangeText = this.handleChangeText.bind(this)
    }

    handleChangeRadio(event){
        const id = event.target.id
        this.setState({
            SelectedOption:id,
        }
        ,function callBack(){
            console.log(this.state)
        })
    }

    handleChangeText(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value,
        })
    }

    renderFormControl(){
        return(
            <FormControl
                    id='NumberOfTakeOffs'
                    name='DisplayFormMultipleTakeOffs'
                    placeholder='Ex: 12'
                    onChange={this.handleChangeText}
                    value={this.state.DisplayForm}
                    />
        )
    }

    render() {
        return (
            <>
            <div>Take off</div>
            <Form.Check
            id='TakeOffPerformed' 
            type='radio' 
            label='Take off performed'
            name='NumberOfTO'
            checked={this.state.SelectedOption === 'TakeOffPerformed'}
            onChange={this.handleChangeRadio}/>
            <Form.Check 
            id='MultipleTakeOff'
            type='radio' 
            label='Multiple take offs'
            name='NumberOfTO'
            checked={this.state.SelectedOption === 'MultipleTakeOff'}
            onChange={this.handleChangeRadio}/>
            {this.state.SelectedOption === 'MultipleTakeOff' ? this.renderFormControl():null}
            </>
        );
    }
}

export default NewDepartureEntryTakeOff;