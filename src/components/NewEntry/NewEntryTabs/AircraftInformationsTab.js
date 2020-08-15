import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import  * as yup from 'yup'
import NewAircraftEntry from '../NewAircraftEntry/NewAircraftEntry';

const AircraftInformationsTab = (props) => {

    const schema = yup.object({
        AircraftRegistration:yup.string().required('Aircraft registration is required'),
        AircraftType:yup.string().required('Aircraft type is required'),
        SEorME:yup.string().required('Please choose single or multi engine'),
        SPorMP:yup.string().required('Please choose single or multi pilot'),
    })

    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('Aircraft informations data')
                console.log('Simulating presaving data', values)
                props.changeTab('CrewInformations')
            }}
            initialValues={{
                AircraftRegistration:'',
                AircraftType:'',
                SEorME:'',
                SPorMP:'',
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
                            <NewAircraftEntry
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