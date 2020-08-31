import React, {useState} from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap'
import TakeOffAndLandingTab from './1_TakeOffAndLanding/TakeOffAndLandingTab';
import AicraftInformationsTab from './3_Aircraft/AircraftInformationsTab';
import CrewInformationsTab from './4_Crew/CrewInformationsTab';
import TimeAllocationTab from './2_TimeAllocation/TimeAllocationTab';
import RemarksTab from './5_Remarks/RemarksTab';

const FlightEntry = () => {
    const [key, setKey] = useState('DepartureAndArrival')
    const [flightEntry, setFlightEntry] = useState({});

    const presave = async (values) =>  {
        await setFlightEntry({ ...flightEntry, ...values })

    }

    const save = () => {
        console.log(flightEntry)
        console.log('sending data to server...')
    }

    return (
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
    );
}

export default FlightEntry;
