import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import  * as yup from 'yup'
import NewCrewEntry from '../NewCrewEntry/NewCrewEntry';

const CrewInformationsTab = (props) => {

    const schema = yup.object({
         //CrewFirstName:yup.string().required('First name'),
    //CrewLastName:yup.string().required('Last name'),
    })

    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('Crew informations data')
                console.log('Simulating presaving data', values)
                props.changeTab('Remarks')
            }}
            initialValues={{
                //CrewFirstName:'',
                //CrewLastName:'',
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
                            <NewCrewEntry
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