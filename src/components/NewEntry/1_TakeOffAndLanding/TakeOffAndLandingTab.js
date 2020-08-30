import React from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import  * as yup from 'yup'
import TakeOffEntry from './TakeOffOrLandingEntry/TakeOffEntry';
import LandingEntry from './TakeOffOrLandingEntry/LandingEntry';

const schema = yup.object({
    DateOfTakeOff:yup.string().required('Take Off date is required'),
    TimeOfTakeOff:yup.string().required('Take Off time is required'),
    AirportOfTakeOff:yup.string().required('Take Off airport is required').min(3,'Enter ICAO or IATA code').max(4, 'Enter ICAO or IATA code'),
    TimeOfDayTakeOff:yup.string().required('Please choose day or night'),
    AmountOfTakeOffs:yup.number().required('Please choose a whole number bigger than 0').integer('Can not be decimal').min(0, 'Can not be negative'),
    DateOfLanding:yup.string().required('Landing date is required'),
    TimeOfLanding:yup.string().required('Landing time is required'),
    AirportOfLanding:yup.string().required('Landing airport is required').min(3,'Enter ICAO or IATA code').max(4,'Enter ICAO or IATA code'),
    TimeOfDayLanding:yup.string().required('Please choose day or night'),
    AmountOfLandings:yup.number().required('Please choose a whole number bigger than 0').integer('Can not be decimal').min(0, 'Can not be negative'),
})

const TakeOffAndLandingTab = (props) => {
    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('New departure and arrival data : ', values)
                console.log('Simulating presaving data')
                props.changeTab('TimeAllocation')
            }}
            initialValues={{
                DateOfTakeOff:'',
                TimeOfTakeOff:'',
                AirportOfTakeOff:'',
                TimeOfDayTakeOff:'',
                AmountOfTakeOffs:'',
                DateOfLanding:'',
                TimeOfLanding:'',
                AirportOfLanding:'',
                TimeOfDayLanding:'',
                AmountOfLandings:''
            }}
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
                    <Button type='submit'>Next: Time allocation</Button>
                </Form>
            )}
        </Formik>
    )
}

export default TakeOffAndLandingTab
