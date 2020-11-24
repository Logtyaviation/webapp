import React, { Component } from 'react';
import StateNumberDate from './Components/StateNumberDate';
import TypeValidityRemarks from './Components/TypeValidityRemarks';
import { Formik } from 'formik';
import { Container, Form, Button } from 'react-bootstrap';
import Ratings from './Components/Ratings';
import { LicenseSchema, LicenseInitialValues } from '../PersonalProfilValuesAndSchema';
import {postInDB} from '../../Functions'


class License extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            LicenseStateOfIssue:LicenseInitialValues.LicenseStateOfIssue,
            LicenseNumber:LicenseInitialValues.LicenseNumber,
            LicenseDateOfIssue:LicenseInitialValues.LicenseDateOfIssue,
            LicenseExpirationDate:LicenseInitialValues.LicenseExpirationDate,
            LicenseTitle:LicenseInitialValues.LicenseTitle,
            DateOfTitleInitialIssue:LicenseInitialValues.DateOfTitleInitialIssue,
            LicenseCountryCode:LicenseInitialValues.LicenseCountryCode,
            LicenseELP:LicenseInitialValues.LicenseELP,
            LicenseELPExpirationDate:LicenseInitialValues.LicenseELPExpirationDate,
            LicenseRemarks:LicenseInitialValues.LicenseRemarks,
            RatingList:LicenseInitialValues.RatingList
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/license/details', {
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
                console.log(body)
                this.setState({
                    LicenseStateOfIssue:body.state_of_issue,
                    LicenseNumber:body.license_number,
                    LicenseDateOfIssue:body.date_of_issue,
                    LicenseExpirationDate:body.expiration_date,
                    LicenseTitle:body.license_title,
                    DateOfTitleInitialIssue:body.date_of_issue,
                    LicenseCountryCode:body.country_code,
                    LicenseELP:body.elp,
                    LicenseELPExpirationDate:body.elp_expiration,
                    LicenseRemarks:body.remarks,
                    RatingList:[]
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
                validationSchema={LicenseSchema}
                onSubmit={values => {
                    console.log('License informations : ', values)
                    postInDB({
                        license_number: values.LicenseNumber,
                        date_of_issue: values.LicenseDateOfIssue,
                        expiration_date: values.LicenseExpirationDate,
                        elp: values.LicenseELP,
                        elp_expiration: values.LicenseELPExpirationDate,
                        remarks: values.LicenseRemarks,
                        rating_list: values.RatingList,
                        license_title: values.LicenseTitle,
                        state_of_issue: values.LicenseStateOfIssue,
                        country_code: values.LicenseCountryCode
                    }, 'http://localhost:3000/license/save')
                }}
                initialValues={this.state}
            >
                {({
                    handleSubmit,
                    handleChange,
                    errors,
                    values,
                }) => (
                    <Container fluid>
                        <Form noValidate onSubmit={handleSubmit}>
                            <StateNumberDate
                            handleChange={handleChange}
                            values={values}
                            errors={errors}
                            />
                            <TypeValidityRemarks
                            handleChange={handleChange}
                            values={values}
                            errors={errors}
                            />
                            <Ratings
                            handleChange={handleChange}
                            values={values}
                            errors={errors}
                            />
                            <Button type='submit'>Save</Button>
                        </Form>
                    </Container>
                )}
            </Formik>
        )        
    }
}


export default License;