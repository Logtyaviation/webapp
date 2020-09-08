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
                props.presave(values)
                props.changeTab('CrewInformations')
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
                    <Button type='submit' style={{float : 'right'}}>Next: Crew informations</Button>
                </Form>
            )}
        </Formik>
    )
}

export default AircraftInformationsTab
