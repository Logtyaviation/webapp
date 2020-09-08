import React from 'react'
import { CardDeck } from 'react-bootstrap'
import GenericHomePageCard from './Components/GenericHomePageCard'

const CardDeckHomePage = () => {
    return(
        <>
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

export default CardDeckHomePage