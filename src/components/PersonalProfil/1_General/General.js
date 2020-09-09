import React from 'react';
import AccountDetails from '../../Register/SubComponent/AccountDetails';
import DateOfBirth from './Components/DateOfBirth';
import FirstLastNames from './Components/FirstLastNames';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik'
import { GeneralSchema, GeneralInitialValues } from '../PersonalProfilValuesAndSchema';
import CompanyAndRank from './Components/CompanyAndRank';


const General = () => {
    return(
        <Formik
            validationSchema={GeneralSchema}
            onSubmit={values => {
                console.log('General informations:', values)
                console.log('Simulating sending data to server')
            }}
            initialValues={GeneralInitialValues}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                errors,
            }) => (
                <Container fluid>
                    <Form noValidate onSubmit={handleSubmit}>
                        <FirstLastNames
                        handleChange={handleChange}
                        values={values}
                        errors={errors}/>
                        <DateOfBirth
                        handleChange={handleChange}
                        values={values}
                        errors={errors}/>
                        <CompanyAndRank
                        handleChange={handleChange}
                        values={values}
                        errors={errors}/>
                        <AccountDetails
                        handleChange={handleChange}
                        values={values}
                        errors={errors}/>    
                        <Button type='submit'>Save</Button>
                    </Form>                
                </Container>
            )}
            </Formik>
        )
    }

export default General;