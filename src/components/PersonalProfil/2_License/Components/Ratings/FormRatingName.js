import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import { isValid, isInvalid, hasErrors} from './Helper'

const FormRatingName = (props) => {
    const {Rating, handleChange, errors, index } = props

    return (
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>{Rating.RatingType}</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            name={`RatingList.${index}.RatingName`}
            id={`RatingList.${index}.RatingName`}
            placeholder={
                Rating.RatingType === 'Class/Type rating' ? 
                'Ex: B737 300-900':
                Rating.RatingType === 'Certificate' ?
                'TDB':'Ex: PBN'
            }
            value={Rating.RatingName}
            onChange={handleChange}
            isValid={isValid({index, Rating, key:'RatingName', errors})}
            isInvalid={isInvalid({index, Rating, key:'RatingName', errors})}
            />
            <Form.Control.Feedback type='invalid'>
                {hasErrors(errors, index, 'RatingName') ? errors.RatingList[index].RatingName : null}
            </Form.Control.Feedback>
        </InputGroup>
    )
}

export default FormRatingName