import React, { Component } from 'react';
import {Form, FormControl} from 'react-bootstrap'

class NewArrivalEntryLandingRemarks extends Component {

    constructor(props){
        super(props)
        this.state={
            SelectedOption:'',
            DisplayFormMultiple:'',
            DisplayFormAutoland:'',
            DisplayFormOther:''
        }

    this.handleChangeRadio = this.handleChangeRadio.bind(this)
    this.handleChangeText = this.handleChangeText.bind(this)
    }

    handleChangeRadio(event){
        const id = event.target.id
        this.setState({
            SelectedOption:id

        }
        )
    }  
    
    handleChangeText(event){
        const id = event.target.id
        const value = event.target.value
        this.setState({
            [id]:value
        }
        )
    }

    renderFormControl(ID, PH){
        return(
            <FormControl
            id={ID}
            name='DisplayForm'
            placeholder={PH}
            onChange={this.handleChangeText}
            value={this.state[ID]}/>
        )
    }

    render() {
        return (
            <>
            Remark
            <Form.Check 
            id='MonitoredApproach'
            type='radio' 
            label='Monitored Approach'
            name='LandingRemark'
            checked={this.state.SelectedOption === 'MonitoredApproach'}
            onChange={this.handleChangeRadio}/>
            <Form.Check 
            id='AutoLand'
            type='radio' 
            label='AutoLand'
            name='LandingRemark'
            checked={this.state.SelectedOption === 'AutoLand'}
            onChange={this.handleChangeRadio}/>
            {this.state.SelectedOption === 'AutoLand' ? this.renderFormControl('AutoLandCAT', 'Ex: CATIIIA'):null}
            <Form.Check 
            id='OtherLandingRemark'
            type='radio' 
            label='Other'
            name='LandingRemark'
            checked={this.state.SelectedOption === 'OtherLandingRemark'}
            onChange={this.handleChangeRadio}/>
            {this.state.SelectedOption === 'OtherLandingRemark' ? this.renderFormControl('OtherLDGRemark', 'Ex: GLS'):null}
            </>
        );
    }
}

export default NewArrivalEntryLandingRemarks;