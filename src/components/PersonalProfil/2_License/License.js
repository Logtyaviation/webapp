import React from 'react';
import StateNumberDate from './Components/StateNumberDate';
import TypeValidityRemarks from './Components/TypeValidityRemarks';
import { Formik } from 'formik';
import { Container, Form, Button } from 'react-bootstrap';
import  * as yup from 'yup';
import Ratings from './Components/Ratings';

const schema = yup.object({
    LicenseStateOfIssue:yup.string(),
    LicenseNumber:yup.string(),
    LicenseDateOfIssue:yup.string(),
    LicenseExpirationDate:yup.string(),
    LicenseTitle:yup.string(),
    DateOfTitleInitialIssue:yup.date(),
    LicenseCountryCode:yup.string().length(2, 'Code must be 2 caracters'),
    LicenseELP:yup.number().min(1, 'Must be between 1 and 6').max(6, 'Must be between 1 and 6'),
    LicenseELPExpirationDate:yup.date(),
    LicenseRemarks:yup.string().max(500, 'Please write less than 500 caracters'),
    RatingList:yup.array().of(yup.object({
        RatingStyle:yup.string(),
        RatingName:yup.string(),
        RatingRemarks:yup.string(),
    }))
})

const License = () => {
    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('data:', values)
                console.log('Simulating sending data to server')
            }}
            initialValues={{
                LicenseStateOfIssue:'',
                LicenseNumber:'',
                LicenseDateOfIssue:'',
                LicenseExpirationDate:'',
                LicenseTitle:'',
                DateOfTitleInitialIssue:'',
                LicenseCountryCode:'',
                LicenseELP:'',
                LicenseELPExpirationDate:'',
                LicenseRemarks:'',
                RatingList:[]
            }}
        >
            {({
                handleSubmit,
                handleChange,
                errors,
                values,
            }) => (
                <Container fluid>
                    <Form noValidate onSubmit={handleSubmit}>
                        <StateNumberDate
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        />
                        <TypeValidityRemarks
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        />
                        <Ratings
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        />
                        <Button type='submit'>Save</Button>
                    </Form>
                </Container>
            )}
        </Formik>
    )
}

export default License;