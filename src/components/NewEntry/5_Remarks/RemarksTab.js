import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import  * as yup from 'yup'
import RemarkEntry from './RemarksEntry/RemarksEntry';

const RemarksTab = () => {

    const schema = yup.object({
        
    })

    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('Remarks data')
                console.log('Simulating presaving data', values)
            }}
            initialValues={{
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
                <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <RemarkEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                        </Col>
                    </Row>
                    <Button>Save and add another flight</Button>
                    <Button type='submit'>Submit entry to logbook</Button>
                </Form>
            )}
        </Formik>
    )
}

export default RemarksTab