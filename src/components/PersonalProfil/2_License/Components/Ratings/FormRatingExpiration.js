import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import { isValid, isInvalid, hasErrors} from './Helper'

const FormRatingExpiration = (props) => {
    const {Rating, handleChange, errors, index } = props

    return(
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Expiration</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            name={`RatingList.${index}.RatingExpiration`}
            id={`RatingList.${index}.RatingExpiration`}
            placeholder='Ex: 08/09/2020'
            onChange={handleChange}
            value={Rating.RatingExpiration}
            isValid={isValid({index, Rating, key:'RatingExpiration', errors})}
            isInvalid={isInvalid({index, Rating, key:'RatingExpiration', errors})}
            />
            <Form.Control.Feedback type='invalid'>
                {hasErrors(errors, index, 'RatingExpiration') ? errors.RatingList[index].RatingExpiration : null}
            </Form.Control.Feedback>
        </InputGroup>
    )
}

export default FormRatingExpiration