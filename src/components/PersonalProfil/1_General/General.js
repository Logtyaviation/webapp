import React from 'react';
import AccountDetails from '../../Register/SubComponent/AccountDetails';
import DateOfBirth from './Components/DateOfBirth';
import FirstLastNames from './Components/FirstLastNames';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik'
import  * as yup from 'yup'

const schema = yup.object({
    LogbookHolderLastName: yup.string().required('Your last name is required'),
    CTDLogbookHolderLastName: yup.string(', type of entry incorrect, must be a string'),
    LogbookHolderFirstName: yup.string().required('Your first name is required'),
    CTDLogbookHolderFirstName: yup.string(', type of entry incorrect, must be a string'),
    LogbookHolderDayDOB:yup.number().min(1, 'Please enter a valid day number').max(31, 'Please enter a valid day number'),
    LogbookHolderMonthDOB:yup.number().min(1, 'Please enter a valid month number').max(12, 'Please enter a valid month number'),
    LogbookHolderYearDOB:yup.number().min(1920, 'You can not be that old and flying!').max(2020, 'Are you comming from the future ??'),
    email: yup.string().email('Please use a valid Email').required('Email is required'),
    password: yup.string().min(8).required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required')
})

const General = () => {
    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('General informations:', values)
                console.log('Simulating sending data to server')
            }}
            initialValues={{
                LogbookHolderLastName:'',
                LogbookHolderFirstName:'',
                CTDLogbookHolderFirstName:'',
                CTDLogbookHolderLastName:'',
                LogbookHolderDayDOB:'',
                LogbookHolderMonthDOB:'',
                LogbookHolderYearDOB:'',
                email:'',
                password:'',
                confirmPassword:''
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                errors,
            }) => (
                <Container fluid>
                    <Form noValidate onSubmit={handleSubmit}>
                        General informations :
                        <FirstLastNames
                        handleChange={handleChange}
                        values={values}
                        errors={errors}/>
                        <DateOfBirth
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