import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import RemarkEntry from './RemarksEntry/RemarksEntry';
import { RemarksInitialValues, RemarksSchema } from '../FlightEntryValuesAndSchema';

const RemarksTab = (props) => {

    return(
        <Formik
            validationSchema={RemarksSchema}
            onSubmit={async (values) => {
                await props.presave(values)
                props.save()
            }}
            initialValues={RemarksInitialValues}
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
