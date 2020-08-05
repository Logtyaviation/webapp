import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class CrewRankDropdown extends Component {

    returnSelected(){
        if(this.props.selectedKey === 'Custom'){
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
                this.props.selectedKey
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