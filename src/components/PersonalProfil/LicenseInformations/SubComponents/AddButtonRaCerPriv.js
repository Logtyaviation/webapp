import React, { Component } from 'react';
import { Row, Col, DropdownButton, Dropdown, Container, Button } from 'react-bootstrap';
import NewLineRaCerPriv from './NewLineRaCerPriv';

class AddButtonRaCerPriv extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedKeys:[],
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
    }

    handleChange(eventKey){
        const newSelectedKeys = this.state.selectedKeys
        newSelectedKeys.push(eventKey)
        this.setState({
            selectedKeys:newSelectedKeys,
        })
    }

    handleDelete(index){
        const actualSelectedKeys = this.state.selectedKeys
        actualSelectedKeys.splice(index, 1)
        this.setState({
            selectedKeys:actualSelectedKeys
        })
    }
    returnAddRaCerPriv(){
        return(
            this.state.selectedKeys.map((selectedKey, index) => 
                <Row>
                    <Col md='11'>
                        <NewLineRaCerPriv theKey={selectedKey}/>
                    </Col>
                    <Col md='1'>
                        <Button
                        variant='danger'
                        onClick={() => this.handleDelete(index)}
                        >Delete</Button>                    
                    </Col>
                </Row>
            )
        );
    }

    render(){
        return(
           <Container fluid>
               <Row>
                <Col md='1'>
                        <DropdownButton
                        drop='right'
                        title='Add'
                        onSelect={this.handleChange}
                        >
                            <Dropdown.Item eventKey='ClassTypeRating'>Class/Type rating</Dropdown.Item>
                            <Dropdown.Item eventKey='Certificate'>Certificate</Dropdown.Item>
                            <Dropdown.Item eventKey='Privilege'>Privilege</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col md='11'>
                        {this.returnAddRaCerPriv()}
                    </Col>
               </Row>
           </Container>
        )
    }
}

export default AddButtonRaCerPriv;