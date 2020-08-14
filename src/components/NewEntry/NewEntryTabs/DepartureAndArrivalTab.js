import React from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import  * as yup from 'yup'
import NewDepartureEntry from '../NewDepartureEntry/NewDepartureEntry';
import NewArrivalEntry from '../NewArrivalEntry/NewArrivalEntry';

const schema = yup.object({
    DateOfDeparture:yup.string().required('Departure date is required'),
    TimeOfDeparture:yup.string().required('Departure time is required'),
    PlaceOfDeparture:yup.string().required('Departure airport is required').min(3,'Enter ICAO or IATA code').max(4, 'Enter ICAO or IATA code'),
    TimeOfDayTakeOff:yup.string().required('Please choose day or night'),
    NumberOfTO:yup.number().required('Please choose a whole number bigger than 0').integer('Can not be decimal').min(0, 'Can not be negative'),
    DateOfArrival:yup.string().required('Arrival date is required'),
    TimeOfArrival:yup.string().required('Arrival time is required'),
    PlaceOfArrival:yup.string().required('Arrival airport is required').min(3,'Enter ICAO or IATA code').max(4,'Enter ICAO or IATA code'),
    TimeOfDayLanding:yup.string().required('Please choose day or night'),
    NumberOfLDG:yup.number().required('Please choose a whole number bigger than 0').integer('Can not be decimal').min(0, 'Can not be negative'),
})

const DepartureAndArrivalTab = (props) => {
    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('New departure and arrival data : ', values)
                console.log('Simulating presaving data')
                props.changeTab('TimeAllocation')
            }}
            initialValues={{
                DateOfDeparture:'',
                TimeOfDeparture:'',
                PlaceOfDeparture:'',
                TimeOfDayTakeOff:'',
                NumberOfTO:'',
                DateOfArrival:'',
                TimeOfArrival:'',
                TimeOfDayLanding:'',
                NumberOfLDG:'',
                PlaceOfArrival:''
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
                        <NewDepartureEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                        </Col>
                        <Col>
                            <NewArrivalEntry
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

export default DepartureAndArrivalTab