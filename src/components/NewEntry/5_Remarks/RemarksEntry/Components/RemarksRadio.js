import React from 'react';
import { Form, Row } from 'react-bootstrap';

const CreateFormCheck = (label, name, change) => {
    return(
        <Row>
            <Form.Check
            type='checkbox'
            label={label}
            name={name}
            id={name}
            onChange={change}
            />
        </Row>
    )
}

const RemarksRadio = (props) => {
    const { handleChange } = props
    return (
        <>
        {CreateFormCheck('Line-check', 'RemarkLineCheck', handleChange)}
        {CreateFormCheck('Autoland', 'RemarkAutoland', handleChange)}
        {CreateFormCheck('Monitored Approach', 'RemarkMonitoredApproach', handleChange)}
        {CreateFormCheck('Go-around', 'RemarkGoAround', handleChange)}
        {CreateFormCheck('Diversion', 'RemarkDiversion', handleChange)}
        </>
    );
}

export default RemarksRadio;