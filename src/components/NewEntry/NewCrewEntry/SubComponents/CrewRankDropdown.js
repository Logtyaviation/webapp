import React, { Component } from 'react';
import { DropdownButton, Dropdown, Row, Col, Form } from 'react-bootstrap';

class CrewRankDropdown extends Component {

    constructor(props){
        super(props)
        this.state=({
            selectedKey:'Crew rank'
        })
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(eventKey, event){
        this.setState({
            selectedKey:eventKey
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
            <Row>
                <Col>
                    <DropdownButton
                    drop='right'
                    title={this.state.selectedKey}
                    onSelect={this.handleSelect}
                    >
                    <Dropdown.Item eventKey='Captain'>Captain</Dropdown.Item>
                    <Dropdown.Item eventKey='First Officer'>First Officer</Dropdown.Item>
                    <Dropdown.Item eventKey='Second Officer'>Second Officer</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item eventKey='Custom'>Custom</Dropdown.Item>    
                    </DropdownButton>
                </Col>
                <Col>
                    {this.state.selectedKey === 'Custom' ? this.returnSelected():null}
                </Col>
            </Row>
        );
    }
}

export default CrewRankDropdown;