import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import  * as yup from 'yup'
import CrewEntry from './CrewEntry/CrewEntry';

const CrewInformationsTab = (props) => {

    const schema = yup.object({
        CrewList: yup.array().of(yup.object({
            CrewFirstName: yup.string().required('Please enter the first name'),
            CrewLastName: yup.string().required('Please enter the last name'),
            CrewRank: yup.string().required(),
            CustomRank: yup.string().when('CrewRank', {
                is: 'Custom',
                then: yup.string().required('Please enter the rank')
            })
        }).required()),
        PIC: yup.string().required()
    });
    
    const initialValues = {
        CrewList: [{
            CrewFirstName: 'Elon',
            CrewLastName: 'Musk',
            CrewRank: 'Captain',
            CustomRank:''
        }],
        PIC: ''
    };
    
    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                console.log('Crew informations data')
                console.log('Simulating presaving data', values)
                props.changeTab('Remarks')
            }}
            initialValues={initialValues}
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