import React, { Component } from 'react';
import { Row, Col, DropdownButton, Dropdown, Container } from 'react-bootstrap';
import NewLineRaCerPriv from './NewLineRaCerPriv';

class AddButtonRaCerPriv extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedKey:'',
            counter:0
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(eventKey){
        this.setState({
            selectedKey:eventKey,
            counter:this.state.counter+1
        }
        ,function callBack(){
            console.log(this.state)
        })
    }

    returnAddRaCerPriv(){
        const array=[]
        for(let i=0 ; i<this.state.counter ; i++){
            array.push(
                <NewLineRaCerPriv theKey={this.state.selectedKey}/>
            )
        }
        return array
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