import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import  * as yup from 'yup'
import RemarkEntry from './RemarksEntry/RemarksEntry';

const RemarksTab = (props) => {

    const schema = yup.object({

    })

    return(
        <Formik
            validationSchema={schema}
            onSubmit={async (values) => {
                await props.presave(values)
                props.save()
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
