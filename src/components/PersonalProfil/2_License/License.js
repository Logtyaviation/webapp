import React from 'react';
import StateNumberDate from './Components/StateNumberDate';
import TypeValidityRemarks from './Components/TypeValidityRemarks';
import { Formik } from 'formik';
import { Container, Form, Button } from 'react-bootstrap';
import Ratings from './Components/Ratings';
import { LicenseSchema, LicenseInitialValues } from '../PersonalProfilValuesAndSchema';
import {postInDB} from '../../Functions'


const License = () => {
    return(
        <Formik
            validationSchema={LicenseSchema}
            onSubmit={values => {
                console.log('License informations : ', values)
                postInDB({
                    license_number: values.LicenseNumber,
                    date_of_issue: values.LicenseDateOfIssue,
                    expiration_date: values.LicenseExpirationDate,
                    elp: values.LicenseELP,
                    elp_expiration: values.LicenseELPExpirationDate,
                    remarks: values.LicenseRemarks,
                    rating_list: values.RatingList,
                    license_title: values.LicenseTitle,
                    state_of_issue: values.LicenseStateOfIssue,
                    country_code: values.LicenseCountryCode
                }, 'http://localhost:3000/license/save')
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