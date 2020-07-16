import React, { Component } from 'react';
import {Form, FormControl} from 'react-bootstrap'

class NewArrivalEntryLanding extends Component {
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
            name='DisplayFormMultipleLandings'
            placeholder={PH}
            onChange={this.handleChangeText}
            value={this.state[ID]}/>
        )
    }
    
    render() {
        return (
            <>
            <div>Landing</div>
            <Form.Check 
            id='LandingPerformed'
            type='radio' 
            label='Landing performed'
            name='NumberOfLDG'
            checked={this.state.SelectedOption === 'LandingPerformed'}
            onChange={this.handleChangeRadio}/>
             <Form.Check 
            id='MultipleLandings'
            type='radio' 
            label='Multiple landings'
            name='NumberOfLDG'
            checked={this.state.SelectedOption === 'MultipleLandings'}
            onChange={this.handleChangeRadio}/>
            {this.state.SelectedOption === 'MultipleLandings' ? this.renderFormControl('NumberOfLanding', 'Ex: 15'):null}
            </>
        );
    }
}

export default NewArrivalEntryLanding;