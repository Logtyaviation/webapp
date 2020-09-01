import React from "react";
import {Button, Col, Dropdown, DropdownButton, Row} from "react-bootstrap";
import FormRank from "./FormRank";
import FormLastAndFirstName from "./FormLastAndFirstName";
import RadioPIC from "./RadioPIC";
import {FieldArray} from "formik";
import { isLogbookOwner } from './Helper'

const FieldArrayCrew = ({ values, errors, handleChange }) => {

    return (
        <FieldArray name='Crew'>
            {({ push, remove }) => (
                <Row>
                    <Col md={2}>
                        <DropdownButton
                            drop='right'
                            title='Add crew member'
                            onSelect={(eventKey) => push({CustomRank:'', Rank:eventKey, FirstName:'', LastName:''})}
                        >
                            <Dropdown.Item eventKey='Captain'>Captain</Dropdown.Item>
                            <Dropdown.Item eventKey='First Officer'>First Officer</Dropdown.Item>
                            <Dropdown.Item eventKey='Custom'>Custom</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    {values.Crew.length > 0 &&
                    values.Crew.map((CrewMember, index) =>
                        <>
                            {isLogbookOwner(index) ? null : <Col md={2}/>}
                            <FormRank
                                index = {index}
                                errors = {errors}
                                handleChange = {handleChange}
                                CrewMember = {CrewMember}
                            />
                            <FormLastAndFirstName
                                index = {index}
                                CrewMember = {CrewMember}
                                errors = {errors}
                                handleChange = {handleChange}
                            />
                            <RadioPIC
                                values = {values}
                                CrewMember = {CrewMember}
                                handleChange = {handleChange}
                            />
                            <Col md={1}>
                                { !isLogbookOwner(index) ? <Button variant='danger' onClick={() => {
                                    remove(index)
                                    if(values.PIC === `${CrewMember.FirstName} ${CrewMember.LastName}`) {
                                        handleChange({ target: { name: 'PIC', value: '' }})
                                    }
                                }}>Delete</Button> : null }
                            </Col>
                        </>
                    )}
                </Row>
            )}
        </FieldArray>
    )
};

export default FieldArrayCrew
