import React from 'react';
import StateNumberDate from './Components/StateNumberDate';
import TypeValidityRemarks from './Components/TypeValidityRemarks';
import { Formik } from 'formik';
import { Container, Form, Button } from 'react-bootstrap';
import Ratings from './Components/Ratings';
import { LicenseSchema, LicenseInitialValues } from '../PersonalProfilValuesAndSchema';


const License = () => {
    return(
        <Formik
            validationSchema={LicenseSchema}
            onSubmit={values => {
                console.log('data:', values)
                console.log('Simulating sending data to server')
            }}
            initialValues={LicenseInitialValues}
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