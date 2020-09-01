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
                CardButton="Let's see!"
                CardButtonLink='/Table'
                /> 
                <GenericHomePageCard
                CardTitle='New flight entry'
                CardText='Log a new flight in the logbook'
                CardButton="Let's log!"
                CardButtonLink='/NewFlightEntry'
                /> 
           </CardDeck>
        </>
    )
}

export default CardDeckHomePage