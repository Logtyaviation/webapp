import React, {useState} from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap'
import DepartureAndArrivalTab from './NewEntryTabs/DepartureAndArrivalTab';
import TimeAllocationTab from './NewEntryTabs/TimeAllocationTab';
import AicraftInformationsTab from './NewEntryTabs/AircraftInformationsTab';
import CrewInformationsTab from './NewEntryTabs/CrewInformationsTab';
import RemarksTab from './NewEntryTabs/RemarksTab';

const NewFlightEntry = () => {
    const [key, setKey] = useState('TimeAllocation')
    return (
            <Container fluid>
                <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}>
                    <Tab eventKey='DepartureAndArrival' title='Departure and arrival'>
                        <DepartureAndArrivalTab changeTab={setKey}/>
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

export default NewFlightEntry;