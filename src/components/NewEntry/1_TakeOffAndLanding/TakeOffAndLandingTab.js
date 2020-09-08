import React from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import TakeOffEntry from './TakeOffOrLandingEntry/TakeOffEntry';
import LandingEntry from './TakeOffOrLandingEntry/LandingEntry';
import {TakeOffAndLandingSchema, TakeOffAndLandingInitialValues} from '../FlightEntryValuesAndSchema';

const TakeOffAndLandingTab = (props) => {
    return(
        <Formik
            validationSchema={TakeOffAndLandingSchema}
            onSubmit={values => {
                props.presave(values)
                props.changeTab('TimeAllocation')
            }}
            initialValues={TakeOffAndLandingInitialValues}  
        >
            {({
                handleSubmit,
                handleChange,
                values,
                errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                        <TakeOffEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                        </Col>
                        <Col>
                            <LandingEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                        </Col>
                    </Row>
                    <Button type='submit' style={{float : 'right'}}>Next: Time allocation</Button>
                </Form>
            )}
        </Formik>
    )
}

export default TakeOffAndLandingTab
