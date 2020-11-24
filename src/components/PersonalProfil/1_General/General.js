import React, {Component} from 'react';
import AccountDetails from '../../Homepage/3_Register/SubComponent/AccountDetails';
import DateOfBirth from './Components/DateOfBirth';
import FirstLastNames from './Components/FirstLastNames';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik'
import { GeneralSchema, GeneralInitialValues } from '../PersonalProfilValuesAndSchema';
import CompanyAndRank from './Components/CompanyAndRank';
import {postInDB} from '../../Functions'

class General extends Component {

    constructor(props) {
        super(props)
        this.state = {
            HolderFirstName:GeneralInitialValues.HolderFirstName,
            HolderLastName:GeneralInitialValues.HolderLastName,
            HolderFirstName2:GeneralInitialValues.HolderFirstName2,
            HolderLastName2:GeneralInitialValues.HolderLastName2,
            HolderCompany:GeneralInitialValues.HolderCompany,
            DateOfEntry:GeneralInitialValues.DateOfEntry,
            HolderRank:GeneralInitialValues.HolderRank,
            HolderDOB:GeneralInitialValues.HolderDOB,
            email:GeneralInitialValues.email,
            password:GeneralInitialValues.password,
            confirmPassword:GeneralInitialValues.confirmPassword
        }
    }

    componentDidMount(){
        // fetchFromDB('http://localhost:3000/profile/details', this.props.setAuthenticated, {
        //     HolderFirstName:body.first_name,
        //     HolderFirstName2:body.other_first_name,
        //     HolderLastName:body.last_name,
        //     HolderLastName2:body.other_last_name,
        //     HolderDOB:body.date_of_birth
        // })

        fetch('http://localhost:3000/profile/details', {
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
                    HolderFirstName:body.first_name,
                    HolderFirstName2:body.other_first_name,
                    HolderLastName:body.last_name,
                    HolderLastName2:body.other_last_name,
                    HolderDOB:body.date_of_birth
                })
            }
        })
        .catch(error => console.log(error))

        fetch('http://localhost:3000/company/details', {
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
                    HolderCompany:body.airline,
                    HolderRank:body.rank,
                    DateOfEntry:body.date_of_entry
                })
            }
        })
        .catch(error => console.log(error))

        fetch('http://localhost:3000/credentials/details', {
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
                    email:body.email,
                    password:body.password,
                    confirmPassword:body.password
                })
            }
        })
        .catch(error => console.log(error))
    }

    render(){

        return(
            <Formik
                enableReinitialize
                validationSchema={GeneralSchema}
                onSubmit={values => {
                    console.log('General informations:', values)
                    postInDB({
                        first_name: values.HolderFirstName,
                        other_first_name: values.HolderFirstName2, 
                        last_name: values.HolderLastName,
                        other_last_name: values.HolderLastName2,
                        date_of_birth: values.HolderDOB 
                    }, 'http://localhost:3000/profile/save')
                    postInDB({
                        airline: values.HolderCompany, 
                        rank: values.HolderRank,
                        date_of_entry: values.DateOfEntry
                    }, 'http://localhost:3000/company/save')
                    postInDB({
                        email: values.email,
                        password: values.password
                    }, 'http://localhost:3000/credentials/save')
                }}
                initialValues={this.state}
            >
            
                
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                }) => (
                    <>
                    <Container fluid>
                        <Form noValidate onSubmit={handleSubmit}>
                            <FirstLastNames
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                            <DateOfBirth
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                            <CompanyAndRank
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>
                            <AccountDetails
                            handleChange={handleChange}
                            values={values}
                            errors={errors}/>    
                            <Button type='submit'>Save</Button>
                        </Form>                
                    </Container>
                    </>
                )}
                </Formik>
            )
    }
}

export default General;