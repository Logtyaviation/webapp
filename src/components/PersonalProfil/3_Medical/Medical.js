import React from 'react'
import { Formik } from 'formik'
import { Container, Button, Form } from 'react-bootstrap'
import ExpirationDates from './Components/ExpirationDates'
import { MedicalInitialValues, MedicalSchema } from '../PersonalProfilValuesAndSchema'
import IssueDateRestrictions from './Components/IssueDateRestrictions'
import {postInDB} from '../../Functions';

const Medical = () => {
    return(
        <Formik
            validationSchema = {MedicalSchema}
            initialValues = {MedicalInitialValues}
            onSubmit = {values => {
                console.log('data', values)
                postInDB({
                    issue_date: values.MedicalIssueDate,
                    medical_remark: values.MedicalRestrictions,
                    class1_exp: values.Class1Expiration,
                    class2_exp: values.Class2Expiration,
                    lapl_exp: values.LAPLExpiration
                }, 'http://localhost:3000/medical/save')
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