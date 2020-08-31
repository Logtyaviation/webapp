import React, {useState} from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap'
import TakeOffAndLandingTab from './1_TakeOffAndLanding/TakeOffAndLandingTab';
import AicraftInformationsTab from './3_Aircraft/AircraftInformationsTab';
import CrewInformationsTab from './4_Crew/CrewInformationsTab';
import TimeAllocationTab from './2_TimeAllocation/TimeAllocationTab';
import RemarksTab from './5_Remarks/RemarksTab';

const FlightEntry = () => {
    const [key, setKey] = useState('DepartureAndArrival')
    return (
            <Container fluid>
                <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}>
                    <Tab eventKey='DepartureAndArrival' title='Departure and arrival'>
                        <TakeOffAndLandingTab changeTab={setKey}/>
                    </Tab>
                    <Tab eventKey='TimeAllocation' title='Time allocation'>
                        <TimeAllocationTab changeTab={setKey}/>
                    </Tab>
                    <Tab eventKey='AircraftInformations' title='Aircraft informations'>
                        <AicraftInformationsTab changeTab={setKey}/>
                    </Tab>
                    <Tab eventKey='CrewInformations' title='Crew informations'>
                        <CrewInformationsTab changeTab={setKey}/>
                    </Tab>
                    <Tab eventKey='Remarks' title='Remarks'>
                        <RemarksTab/>
                    </Tab>
                </Tabs>
            </Container>
    );
}

export default FlightEntry;
