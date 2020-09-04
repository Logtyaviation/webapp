import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import { isValid, isInvalid, hasErrors} from './Helper'

const FormRatingRemarks = (props) => {
    const {Rating, handleChange, errors, index } = props

    return(
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Remarks/Restriction</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            name={`RatingList.${index}.RatingRemarks`}
            id={`RatingList.${index}.RatingRemarks`}
            as='textarea'
            rows='1'
            placeholder='Ex: TDB'
            onChange={handleChange}
            value={Rating.RatingRemarks}
            isValid={isValid({index, Rating, key:'RatingRemarks', errors})}
            isInvalid={isInvalid({index, Rating, key:'RatingRemarks', errors})}
            />
            <Form.Control.Feedback type='invalid'>
                {hasErrors(errors, index, 'RatingRemarks') ? errors.RatingList[index].RatingRemarks : null}
            </Form.Control.Feedback>
        </InputGroup>
    )
}

export default FormRatingRemarks