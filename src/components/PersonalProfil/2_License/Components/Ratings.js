import React from 'react'
import { DropdownButton, Dropdown, Row, Col, Button } from 'react-bootstrap';
import { FieldArray } from 'formik'
import FormRatingRemarks from './Ratings/FormRatingRemarks';
import FormRatingName from './Ratings/FormRatingName';
import FormRatingExpiration from './Ratings/FormRatingExpiration';

const Ratings = (props) => {
    const {errors, values, handleChange} = props

    return (
        <>
        <div>Ratings, certificates and privileges</div>
        <FieldArray name='RatingList'>
            {({ remove, push }) => (
            <>
                <DropdownButton
                    drop='right'
                    title='Add'
                    onSelect={(eventKey) => push({RatingType:eventKey, RatingName:'', RatingExpiration:'', RatingRemarks:''})}
                    >
                    <Dropdown.Item eventKey = 'Class/Type rating'>Class/Type rating</Dropdown.Item>
                    <Dropdown.Item eventKey = 'Certificate'>Certificate</Dropdown.Item>
                    <Dropdown.Item eventKey = 'Privilege'>Privilege</Dropdown.Item>    
                </DropdownButton>
                {values.RatingList.length > 0 &&
                values.RatingList.map((Rating, index) => (
                    <Row key={index}>
                        <Col md='4'>
                            <FormRatingName
                            Rating = {Rating}
                            handleChange = {handleChange}
                            errors={errors}
                            index={index}
                            />
                        </Col>
                        <Col md='3'>
                            <FormRatingExpiration
                            Rating = {Rating}
                            handleChange = {handleChange}
                            errors = {errors}
                            index = {index}
                            />
                        </Col>
                        <Col md='4'>
                            <FormRatingRemarks
                            Rating = {Rating}
                            handleChange = {handleChange}
                            errors={errors}
                            index={index}
                            />
                        </Col>
                        <Col md='1'>
                            <Button onClick={() => remove(index)} variant='danger'>Delete</Button>
                        </Col>
                    </Row>
                ))}
            </>    
            )}
        </FieldArray> 
        </>
    );
}

export default Ratings