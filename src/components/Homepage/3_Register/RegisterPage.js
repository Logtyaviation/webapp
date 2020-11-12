import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik'
import AccountDetails from './SubComponent/AccountDetails'
import {postInDB} from '../../Functions';
import { RegisterSchema, RegisterValues } from '../HomepageValuesAndSchema';


const RegisterPage = () => {
    return (
        <Formik
            validationSchema={RegisterSchema}
            onSubmit={values => {
                console.log(values)
                postInDB({
                    email: values.email, 
                    password: values.password, 
                    last_login: '2020-10-26 18:00:00'
                }, 'http://localhost:3000/credentials/save')
            }}
            initialValues= {RegisterValues}
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