import React, { Component } from 'react';
import { Col, Row, DropdownButton, Dropdown, Button} from 'react-bootstrap'
import OwnersLine from './OwnersLine';
import CrewLine from './CrewLine';
import CrewRankDropdown from './CrewRankDropdown';


class AddCrewButton extends Component {

    constructor(props){
        super(props)
        this.state={
            LogbookHolderRank:'First Officer',
            LogbookHolderFirstName:'Xavier',
            LogbookHolderLastName:'Solse',
            crewMembers:[]
        }
        this.handleSelect=this.handleSelect.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
    }

    handleSelect(eventKey){
        const addNewCrewMember=this.state.crewMembers
        addNewCrewMember.push(eventKey)
        this.setState({
            crewMembers:addNewCrewMember
        },
        function callBack(){
            console.log(this.state)
        })
    }

    handleDelete(index){
        const deleteCrewMember=this.state.crewMembers
        deleteCrewMember.splice(index, 1)
        this.setState({
            crewMembers:deleteCrewMember
        },
        function callBack(){
            console.log(this.state)
        })
    }

    returnCrewMembers(){
        return(
            this.state.crewMembers.map((selectedKey, index)=>
            <>
                <Col md={2}>
                    <CrewRankDropdown selectedKey={selectedKey}/>
                </Col>
                <Col md={8}>
                    <CrewLine
                    handleChange={this.props.handleChange}
                    values={this.props.values}
                    errors={this.props.errors}
                    />
                </Col>
                <Col md={2}>
                    <Button 
                    variant='danger'
                    onClick={()=> this.handleDelete(index)}
                    >Delete</Button> 
                </Col>
            </>
            )
        )
    }

    render() {
        return (
            <>
            <Row>
                <Col md={2}>
                        <DropdownButton
                            drop='right'
                            title='Add crew member'
                            onSelect={this.handleSelect}
                            >
                            <Dropdown.Item eventKey='Captain'>Captain</Dropdown.Item>
                            <Dropdown.Item eventKey='First Officer'>First Officer</Dropdown.Item>
                            <Dropdown.Item eventKey='Custom'>Custom</Dropdown.Item>
                        </DropdownButton>
                </Col>
                <Col md={10}>
                    <Row>
                        <OwnersLine 
                        LogbookHolderFirstName={this.state.LogbookHolderFirstName} 
                        LogbookHolderLastName={this.state.LogbookHolderLastName}
                        LogbookHolderRank={this.state.LogbookHolderRank}
                        />
                    </Row>
                    <Row>
                        {this.returnCrewMembers()}
                    </Row>
                </Col>
            </Row>
            </>
        );
    }
}

export default AddCrewButton;