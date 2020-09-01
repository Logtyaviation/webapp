import React from 'react';
import {Accordion, Card} from 'react-bootstrap'
import FormLabelTotalOrPartTimeGeneric from './FormLabelTotalOrPartTimeGeneric';

const CardLabelTimeGeneric = ({ thekey, label, values, errors, handleChange }) => {

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle eventKey={thekey}>{label}</Accordion.Toggle>
                &nbsp; {values[`TotalOrPart${label}Time`] === `Total${label}Time` ? values.TotalBlockTime:values[label + 'Time']} {values[`TotalOrPart${label}Time`] === '' ? null:' Hours'}
            </Card.Header>
            <Accordion.Collapse eventKey={thekey}>
                <Card.Body>
                    <FormLabelTotalOrPartTimeGeneric
                    example1='Ex: 04:38'
                    example2='Ex: 02:56'
                    label={label}
                    handleChange={handleChange}
                    values={values}
                    errors={errors}/>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default CardLabelTimeGeneric;
