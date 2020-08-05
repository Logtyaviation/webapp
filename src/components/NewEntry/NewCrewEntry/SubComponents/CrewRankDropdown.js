import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class CrewRankDropdown extends Component {

    constructor(props){
        super(props)
        this.state=({
            selectedKey:props.selectedKey
        })
    }

    returnSelected(){
        if(this.state.selectedKey === 'Custom'){
            return(
                <Form>
                    <Form.Control 
                    placeholder='Ex : Instructor'
                    name='CustomRank'/>
                </Form>
            )
        }
        else{
            return(
                this.state.selectedKey
            )
        }
    }

    render() {
        return (
            this.returnSelected()
        );
    }
}

export default CrewRankDropdown;