import React from "react";
import FieldArrayCrew from "./FieldArrayCrew";

const isLogbookOwner = (index) => index === 0;

const hasValue = (object, key) => object !== undefined && object[key] !== undefined && object[key].length > 0;

const hasErrors = (errors, index, key) => {
    if (errors.CrewList !== undefined && errors.CrewList[index] !== undefined) {
        return errors.CrewList[index][key];
    }
    return false;
};

const isValid = ({ index, crewMember, key, errors }) => {
    if (!isLogbookOwner(index) && hasValue(crewMember, key) && !hasErrors(errors, index, key)) {
        return true;
    }
    return false;
};

const isInvalid = ({ index, errors, key }) => {
    if (!isLogbookOwner(index) && hasErrors(errors, index, key)) {
        return true;
    }
    return false;
};

const hasPIC = (PIC) => PIC !== '';

const AddCrew = (props) => {
    const { values, errors, handleChange } = props
    return (
        <FieldArrayCrew
        values = {values}
        isValid = {isValid}
        isInvalid = {isInvalid}
        hasErrors = {hasErrors}
        errors = {errors}
        handleChange = {handleChange}
        hasPIC = {hasPIC}
        isLogbookOwner = {isLogbookOwner}
        />
    )
};

export default AddCrew
