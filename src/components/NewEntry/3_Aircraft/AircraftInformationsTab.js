import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import AircraftEntry from './AircraftEntry/AircraftEntry';
import { AircraftInformationInitialValues, AircraftInformationSchema } from '../FlightEntryValuesAndSchema';

const AircraftInformationsTab = (props) => {

    return(
        <Formik
            validationSchema={AircraftInformationSchema}
            onSubmit={values => {
                props.changeTab('CrewInformations')
                props.presave(values)
            }}
            initialValues={AircraftInformationInitialValues}
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
                            <AircraftEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                        </Col>
                    </Row>
                    <Button type='submit'>Next: Crew informations</Button>
                </Form>
            )}
        </Formik>
    )
}

export default AircraftInformationsTab
