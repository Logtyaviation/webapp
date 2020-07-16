import React, { Component } from 'react';
import { Col, Row, Button} from 'react-bootstrap'
import OwnersLine from './OwnersLine';
import CrewLine from './CrewLine';

class AddCrewButton extends Component {

    constructor(props){
        super(props)
        this.state={
            counter:props.counter,
            LogbookHolderRank:'First Officer',
            LogbookHolderFirstName:'Xavier',
            LogbookHolderLastName:'Solse'
        }
        this.addNewCrew=this.addNewCrew.bind(this)
    }

    addNewCrew(){
        this.setState({
            counter:this.state.counter+1})
    }

    returnAddCrew(){
        const array=[]

        for(let i=0 ; i<this.state.counter ; i++){
            let element;
            if (i===0){
                element=(
                    <>
                    <Row>
                        <OwnersLine 
                        LogbookHolderFirstName={this.state.LogbookHolderFirstName} 
                        LogbookHolderLastName={this.state.LogbookHolderLastName}
                        LogbookHolderRank={this.state.LogbookHolderRank}
                        />
                    </Row>
                    </>
                )
            }
            else(
                element=(
                    <Row>
                        <CrewLine/>
                    </Row>
                )
            )
            array.push(
                element
            )            
        }

        return array

    }

    render() {
        return (
            <>
            <Row>
                <Col md={2}>
                    <Button
                    onClick={this.addNewCrew}>Add Crew</Button>
                </Col>
                <Col md={10}>
                {this.returnAddCrew()}
                </Col>
            </Row>
            </>
        );
    }
}

export default AddCrewButton;