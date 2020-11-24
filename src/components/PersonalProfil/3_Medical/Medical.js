import React, {Component} from 'react'
import { Formik } from 'formik'
import { Container, Button, Form } from 'react-bootstrap'
import ExpirationDates from './Components/ExpirationDates'
import { MedicalInitialValues, MedicalSchema } from '../PersonalProfilValuesAndSchema'
import IssueDateRestrictions from './Components/IssueDateRestrictions'
import {postInDB} from '../../Functions';

class Medical extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            Class1Expiration:MedicalInitialValues.Class1Expiration,
            Class2Expiration:MedicalInitialValues.Class2Expiration,
            LAPLExpiration:MedicalInitialValues.LAPLExpiration,
            MedicalIssueDate:MedicalInitialValues.MedicalIssueDate,
            MedicalRestrictions:MedicalInitialValues.MedicalRestrictions
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/medical/details', {
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            credentials:'include'
        })
        .then(async (response) => {
            const text = await response.text();
            const body = JSON.parse(text);
            const isAuthenticated = response.status === 200;
            this.props.setAuthenticated(isAuthenticated)
            if(isAuthenticated) {
                this.setState({
                    Class1Expiration:body.class1_exp,
                    Class2Expiration:body.class2_exp,
                    LAPLExpiration:body.lapl_exp,
                    MedicalIssueDate:body.issue_date,
                    MedicalRestrictions:body.medical_remark
                })
                console.log(this.state)
            }
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <Formik
                enableReinitialize
                validationSchema = {MedicalSchema}
                initialValues = {this.state}
                onSubmit = {values => {
                    console.log('data', values)
                    postInDB({
                        issue_date: values.MedicalIssueDate,
                        medical_remark: values.MedicalRestrictions,
                        class1_exp: values.Class1Expiration,
                        class2_exp: values.Class2Expiration,
                        lapl_exp: values.LAPLExpiration
                    }, 'http://localhost:3000/medical/save')
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    errors,
                    values
                }) => (
                    <Container fluid>
                        <Form noValidate onSubmit={handleSubmit}>
                            <IssueDateRestrictions
                            handleChange={handleChange}
                            values={values}
                            errors={errors}
                            />
                            <ExpirationDates
                            handleChange={handleChange}
                            values={values}
                            errors={errors}
                            />
                            <Button type = 'submit' >Save</Button>
                        </Form>
                    </Container>
                )}
            </Formik>
        )

    }
}

export default Medical