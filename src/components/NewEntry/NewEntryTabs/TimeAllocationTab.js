import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import  * as yup from 'yup'
import NewTimeEntry from '../NewTimeEntry/NewTimeEntry';

const TimeAllocationTab = (props) => {

    const schema = yup.object({
        TotalBlockTime:yup.string().required('Total block time is required'),
    })

    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('Time allocation data')
                console.log('Simulating presaving data', values)
                props.changeTab('AircraftInformations')
            }}
            initialValues={{
                TotalBlockTime:'',
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