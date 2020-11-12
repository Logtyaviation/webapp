import React from 'react';
import AccountDetails from '../../Homepage/3_Register/SubComponent/AccountDetails';
import DateOfBirth from './Components/DateOfBirth';
import FirstLastNames from './Components/FirstLastNames';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik'
import { GeneralSchema, GeneralInitialValues } from '../PersonalProfilValuesAndSchema';
import CompanyAndRank from './Components/CompanyAndRank';
import {postInDB} from '../../Functions'

const General = () => {
    return(
        <Formik
            validationSchema={GeneralSchema}
            onSubmit={values => {
                console.log('General informations:', values)
                postInDB({
                    first_name: values.HolderFirstName+' '+values.HolderFirstName2, 
                    last_name: values.HolderLastName+' '+values.HolderLastName2,
                    date_of_birth: values.HolderDayDOB+'/'+values.HolderMonthDOB+'/'+values.HolderYearDOB 
                }, 'http://localhost:3000/profil/save')
                postInDB({
                    airline: values.HolderCompany, 
                    rank: values.HolderRank,
                    date_of_entry: values.DateOfEntry
                }, 'http://localhost:3000/company/save')
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