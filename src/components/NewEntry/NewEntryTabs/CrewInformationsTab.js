import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import  * as yup from 'yup'
import NewCrewEntry from '../NewCrewEntry/NewCrewEntry';

const CrewInformationsTab = (props) => {

    const schema = yup.array().of(yup.object({
        CrewFirstName:yup.string().required('Please enter the first name'),
        CrewLastName:yup.string().required('Please enter the last name'),
        CrewIsPIC:yup.string()
    }))

    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('Crew informations data')
                console.log('Simulating presaving data', values)
                props.changeTab('Remarks')
            }}
            initialValues={{
                CrewList:[{
                    CrewFirstName:'',
                    CrewLastName:'',
                    CrewIsPIC:'',
                }]
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                errors,
            }) => (
                <Form>
                    <Row>
                        <Col>
                            <NewCrewEntry
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                        </Col>
                    </Row>
                    <Button>Next: Remarks</Button>
                </Form>
            )}
        </Formik>
    )
}

export default CrewInformationsTab