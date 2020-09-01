import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import NewTimeEntry from './TimeEntry/TimeEntry';
import { TimeAllocationSchema, TimeAllocationInitialValues } from '../FlightEntryValuesAndSchema';

const TimeAllocationTab = (props) => {

    return(
        <Formik
            validationSchema={TimeAllocationSchema}
            onSubmit={values => {
                props.presave(values)
                props.changeTab('AircraftInformations')
            }}
            initialValues={TimeAllocationInitialValues}
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
                            <NewTimeEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                        </Col>
                    </Row>
                    <Button type='submit'>Next: Aircraft informations</Button>
                </Form>
            )}
        </Formik>
    )
}

export default TimeAllocationTab
