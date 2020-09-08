import React from 'react'
import { Formik } from 'formik'
import { Container, Button, Form } from 'react-bootstrap'
import ExpirationDates from './Components/ExpirationDates'
import { MedicalInitialValues, MedicalSchema } from '../PersonalProfilValuesAndSchema'
import IssueDateRestrictions from './Components/IssueDateRestrictions'

const Medical = () => {
    return(
        <Formik
            validationSchema = {MedicalSchema}
            initialValues = {MedicalInitialValues}
            onSubmit = {values => {
                console.log('data', values)
                console.log('Simulating sending data to server')
            }}
        >
            {({
                handleSubmit,
                handleChange,
                errors,
                values
            }) => (
                <Container fluid>
                    <Form noValidate onSubmit={handleSubmit}>
                        <IssueDateRestrictions
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        />
                        <ExpirationDates
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        />
                        <Button type = 'submit' >Save</Button>
                    </Form>
                </Container>
            )}
        </Formik>
    )
}

export default Medical