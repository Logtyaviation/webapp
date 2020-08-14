import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik'
import  * as yup from 'yup'
import AccountDetails from './SubComponent/AccountDetails'

const schema = yup.object({
    email: yup.string().email('Please use a valid Email').required('Email is required'),
    password: yup.string().min(8).required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required')
})

const RegisterPage = () => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('data:', values)
                console.log('sending data to server...')
            }}
            initialValues= {{
                email: '',
                password: '',
                confirmPassword: ''
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
                    <AccountDetails 
                        handleChange={handleChange} 
                        values={values}
                        errors={errors} />
                    <Button type='submit'>Register</Button> 
                </Form>
            </Container>
                
            )}
        </Formik>
    )
}

export default RegisterPage;