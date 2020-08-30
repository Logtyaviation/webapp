import React from 'react'
import { FieldArray } from 'formik'
import { DropdownButton, Dropdown, Row } from 'react-bootstrap'
import FormRank from "./FormRank";
import FormLastAndFirstName from "./FormLastAndFirstName";
import RadioPICAndDelete from "./RadioPICAndDelete";

const FieldArrayCrew = (props) => {
    const { values, isValid, isInvalid, hasErrors, errors, handleChange, hasPIC, isLogbookOwner } = props

    return(
        <FieldArray name='CrewList'>
            {({ push, remove }) => (
                <div>
                <DropdownButton
                    drop='right'
                    title='Add crew member'
                    onSelect={(eventKey) => push({CustomRank:'', CrewRank:eventKey, CrewFirstName:'', CrewLastName:''})}
                    >
                    <Dropdown.Item eventKey='Captain'>Captain</Dropdown.Item>
                    <Dropdown.Item eventKey='First Officer'>First Officer</Dropdown.Item>
                    <Dropdown.Item eventKey='Custom'>Custom</Dropdown.Item>
                </DropdownButton>
                {values.CrewList.length > 0 &&
                    values.CrewList.map((CrewMember, index) => 
                    <Row key={index}>
                        <FormRank 
                        index = {index}
                        isValid = {isValid}
                        isInvalid = {isInvalid}
                        hasErrors = {hasErrors}
                        errors = {errors}
                        handleChange = {handleChange}
                        CrewMember = {CrewMember}
                        />
                        <FormLastAndFirstName 
                        index = {index}
                        CrewMember = {CrewMember}
                        isValid = {isValid}
                        isInvalid = {isInvalid}
                        hasErrors = {hasErrors}
                        errors = {errors}
                        handleChange = {handleChange}
                        />
                        <RadioPICAndDelete
                        index = {index}
                        values = {values}
                        hasPIC = {hasPIC}
                        CrewMember = {CrewMember}
                        hasErrors = {hasErrors}
                        isLogbookOwner = {isLogbookOwner}
                        remove = {remove}
                        errors = {errors}
                        handleChange = {handleChange}
                        />
                    </Row>)}
                </div>
            )}
        </FieldArray>
    )
}

export default FieldArrayCrew