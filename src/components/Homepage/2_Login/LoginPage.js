import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import LoginCard from './Components/LoginCard'
import { Formik } from 'formik'
import { LoginSchema, LoginValues } from '../HomepageValuesAndSchema'
import SomethingWentWrong from '../../wentWrongModal'
import { Redirect } from 'react-router-dom'

const LoginPage = (props) => { 
    
    const [show, setShow] = useState(false);

    return(
        <>
            {props.isAuthenticated ? <Redirect to='/home'/> : null}
            <Formik
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    const options = {
                        method: 'POST',
                        headers: {'Content-type': 'application/json'},
                        body: JSON.stringify({
                            email: values.LoginEmail,
                            password: values.LoginPassword})
                    }
                    fetch('http://localhost:3000/account/login', options)
                    .then(async (response) => {
                        console.log(await response.text())
                        if(response.status === 200) {
                            props.setAuthenticated(true)
                        }
                        else{
                            setShow(true)
                        }
                    })
                    .catch(error => console.log(error))

                }}
                initialValues={LoginValues}
            >
            {({
                handleSubmit,
                handleChange,
                values,
                errors
            }) => (
                <Container fluid>
                    <LoginCard
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    values={values}
                    errors={errors}
                    />
                    <SomethingWentWrong show={show} setShow={setShow}/>
                </Container>
            )}
            </Formik>
        </>
    )
}

export default LoginPage