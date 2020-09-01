import React from 'react';
import { Row, Col, Button, Form} from 'react-bootstrap'
import { Formik } from 'formik'
import  * as yup from 'yup'
import NewTimeEntry from './TimeEntry/TimeEntry';

const TimeAllocationTab = (props) => {

    const schema = yup.object({
        TotalBlockTime:yup.string().required('Total block time is required'),
        TotalOrPartNightTime:yup.string(),
        NightTime:yup.string().when('TotalOrPartNightTime', {
            is:'PartNightTime',
            then: yup.string().required('Please enter the part time')
        }),
        TotalOrPartIFRTime:yup.string(),
        IFRTime:yup.string().when('TotalOrPartIFRTime', {
            is:'PartIFRTime',
            then: yup.string().required('Please enter the part time')
        }),
        TotalOrPartDualTime:yup.string(),
        DualTime:yup.string().when('TotalOrPartDualTime', {
            is:'PartDualTime',
            then: yup.string().required('Please enter the part time')
        }),
        TotalOrPartPICTime:yup.string(),
        PICTime:yup.string().when('TotalOrPartPICTime', {
            is:'PartPICTime',
            then: yup.string().required('Please enter the part time')
        }),
        TotalOrPartInstructorTime:yup.string(),
        InstructorTime:yup.string().when('TotalOrPartInstructorTime', {
            is:'PartInstructorTime',
            then: yup.string().required('Please enter the part time')
        }),
        TotalOrPartCopilotTime:yup.string(),
        CopilotTime:yup.string().when('TotalOrPartCopilotTime', {
            is:'PartCopilotTime',
            then: yup.string().required('Please enter the part time')
        }),
    })

    return(
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                props.presave(values)
                props.changeTab('AircraftInformations')
            }}
            initialValues={{
                TotalBlockTime:'K',
                TotalOrPartNightTime:'',
                NightTime:'',
                TotalOrPartIFRTime:'',
                IFRTime:'',
                TotalOrPartDualTime:'',
                DualTime:'',
                TotalOrPartPICTime:'',
                PICTime:'',
                TotalOrPartInstructorTime:'',
                InstructorTime:'',
                TotalOrPartCopilotTime:'',
                CopilotTime:'',
                PICUSTime:'',
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
