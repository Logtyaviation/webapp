import React, {useState} from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap'
import TakeOffAndLandingTab from './1_TakeOffAndLanding/TakeOffAndLandingTab';
import AicraftInformationsTab from './3_Aircraft/AircraftInformationsTab';
import CrewInformationsTab from './4_Crew/CrewInformationsTab';
import TimeAllocationTab from './2_TimeAllocation/TimeAllocationTab';
import RemarksTab from './5_Remarks/RemarksTab';
import { Redirect } from 'react-router-dom';

const FlightEntry = (props) => {
    const [key, setKey] = useState('DepartureAndArrival')
    const [flightEntry, setFlightEntry] = useState({});
    const [redirect, setRedirect] = useState(false)
    const presave = async (values) =>  {
        setFlightEntry({ ...flightEntry, ...values })
    }

    const save = () => {
        console.log(flightEntry)
        console.log('sending data to server...')
        setRedirect(true)
    }

    const emptyCheck = () => {
        let array = []
        if(props.location.state !== undefined && Array.isArray(props.location.state)){
            array = [...props.location.state]
        }
        array.push(flightEntry)
        return array
    }

    return (
        <>
        {redirect ? <Redirect to={{pathname:'/ReviewEntry', state:emptyCheck()}}/> :
            <Container fluid>
                <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}>
                    <Tab eventKey='DepartureAndArrival' title='Departure and arrival'>
                        <TakeOffAndLandingTab changeTab={setKey} presave={presave}/>
                    </Tab>
                    <Tab eventKey='TimeAllocation' title='Time allocation'>
                        <TimeAllocationTab changeTab={setKey} presave={presave}/>
                    </Tab>
                    <Tab eventKey='AircraftInformations' title='Aircraft informations'>
                        <AicraftInformationsTab changeTab={setKey} presave={presave}/>
                    </Tab>
                    <Tab eventKey='CrewInformations' title='Crew informations'>
                        <CrewInformationsTab changeTab={setKey} presave={presave}/>
                    </Tab>
                    <Tab eventKey='Remarks' title='Remarks'>
                        <RemarksTab presave={presave} save={save}/>
                    </Tab>
                </Tabs>
            </Container>
        }
        </>
    );
}

export default FlightEntry;
