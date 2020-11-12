import React, { Component } from 'react'
import { CardDeck } from 'react-bootstrap'
import GenericHomePageCard from './Components/GenericHomePageCard'

class CardDeckHomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            first_name:'',
            last_name:'',
            date_of_birth:''    
        }
    }

    componentDidMount() {
        console.log('should fetch details');
        fetch('http://localhost:3000/profile/details', {credentials:'include'})
        .then(async (response) => {
            const text = await response.text();
            console.log('fetch result:', text)
            const body = JSON.parse(text);
            const isAuthenticated = response.status === 200;
            this.props.setAuthenticated(isAuthenticated)
            if(isAuthenticated) {
                const {first_name, last_name, date_of_birth} = body;
                this.setState({first_name, last_name, date_of_birth})
            }
        })
        .catch(error => console.log('catch du fetch', error))
    }

    render(){

        return(
            <>
                <h1>Hello {this.state.first_name}</h1>
                <CardDeck>
                    <GenericHomePageCard
                    CardTitle='Logbook'
                    CardText='Access logbook'
                    ButtonsAmount='2'
                    CardButton='Flights'
                    CardButtonLink='/FlightsTable'
                    CardButton2='Simulators'
                    CardButtonLink2=''
                    /> 
                    <GenericHomePageCard
                    CardTitle='New flight entry'
                    CardText='Log a new flight in the logbook'
                    CardButton="Let's log!"
                    CardButtonLink='/NewFlightEntry'
                    /> 
                    <GenericHomePageCard
                    CardTitle='My profil'
                    CardText='Modify the informations about your profil'
                    CardButton='Modify'
                    CardButtonLink='/PersonalProfil'
                    />
               </CardDeck>
            </>
        )
    }
}

    // TODO change to class

    // state = {
    //     firstname: '',
    //     lastname: ''
    // }

    // componentDidMount() {
    //     fetch('/users', {
    //         credentials: 'include'
    //     })
    //     .then(async (response) => {
    //         const body = await response.json();
    //         setState({
    //             firstName: body.users.profile.firstname
    //         })
    //     })
    // }


export default CardDeckHomePage