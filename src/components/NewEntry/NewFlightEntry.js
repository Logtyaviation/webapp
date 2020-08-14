import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import NewDepartureEntry from './NewDepartureEntry/NewDepartureEntry'
import NewArrivalEntry from './NewArrivalEntry/NewArrivalEntry'
import NewCrewEntry from './NewCrewEntry/NewCrewEntry';
import NewAircraftEntry from './NewAircraftEntry/NewAircraftEntry';
import NewTimeEntry from './NewTimeEntry/NewTimeEntry';
import NewRemarkEntry from './NewRemarkEntry.js/NewRemarkEntry';
import { Formik } from 'formik'
import  * as yup from 'yup'

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
    TotalBlockTime:yup.string().required('Total block time is required'),
    AircraftRegistration:yup.string().required('Aircraft registration is required'),
    AircraftType:yup.string().required('Aircraft type is required'),
    SEorME:yup.string().required('Please choose single or multi engine'),
    SPorMP:yup.string().required('Please choose single or multi pilot'),
    //CrewFirstName:yup.string().required("Please enter the first name"),
    //CrewLastName:yup.string().required("Please enter the last name"),
})

const NewFlightEntry = () => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('New entry flight data : ', values)
                console.log('Simulating sending data to server')
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
                PlaceOfArrival:'',
                TotalBlockTime:'',
                AircraftRegistration:'',
                AircraftType:'',
                SEorME:'',
                SPorMP:'',
                //CrewFirstName:'',
                //CrewLastName:'',
                TextRemarks:'',
                RemarkLineCheck:'',
                RemarkAutoland:'',
                RemarkMonitoredApproach:'',
                RemarkGoAround:'',
                RemarkDiversion:'',
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
                    <Row>
                        <Col>
                            <NewTimeEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <NewAircraftEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <NewCrewEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <NewRemarkEntry
                            handleChange={handleChange}
                            values={values}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <Button>Save and add another flight</Button>
                        </Col>
                        <Col>
                            <Button type='submit'>Submit entry to logbook</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            )}
        </Formik>
    );
}

export default NewFlightEntry;