import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import CrewEntry from './CrewEntry/CrewEntry';
import { CrewInformationSchema, CrewInformationInitialValues } from '../FlightEntryValuesAndSchema';

const CrewInformationsTab = (props) => {

    return(
        <Formik
            validationSchema={CrewInformationSchema}
            onSubmit={values => {
                props.changeTab('Remarks')
                props.presave(values)
            }}
            initialValues={CrewInformationInitialValues}
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
                            <CrewEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                        </Col>
                    </Row>
                    <Button type='submit'>Next: Remarks</Button>
                </Form>
            )}
        </Formik>
    )
}

export default CrewInformationsTab
