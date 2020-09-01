import React from 'react'
import { Table } from 'react-bootstrap'
import TableHeader from '../../Logbook/TableLogbook/Components/TableHeader'
import NewLineTable from '../../Logbook/TableLogbook/Components/NewLineTable'

const ReviewEntry = (props) => {
    const { TakeOffDate, TakeOffTime, TakeOffAirport, TakeOffDayOrNight, TakeOffsAmount, LandingDate, LandingTime, LandingAirport, LandingDayOrNight, LandingsAmount, TotalBlockTime, NightTime, IFRTime, DualTime, PICTime, InstructorTime, CopilotTime, PICUSTime, Registration, Type, SEorME, SPorMP, Crew, PIC, TextRemarks, RemarkLineCheck, RemarkAutoland, RemarkMonitoredApproach, RemarkGoAround, RemarkDiversion } = props.location.state.flightEntry
    return(
        <>
        <Table bordered>
            <TableHeader/>
            <NewLineTable p={1} 
            TakeOffDate={TakeOffDate}
            TakeOffTime={TakeOffTime}
            TakeOffAirport={TakeOffAirport}
            TakeOffByDay={TakeOffDayOrNight === 'TakeOffByDay' ? TakeOffsAmount:null}
            TakeOffByNight={TakeOffDayOrNight === 'TakeOffByNight' ? TakeOffsAmount:null}
            LandingDate={LandingDate}
            LandingTime={LandingTime}
            LandingAirport={LandingAirport}
            LandingByDay={LandingDayOrNight === 'LandingByDay' ? LandingsAmount:null}
            LandingByNight={LandingDayOrNight === 'LandingByNight' ? LandingsAmount:null}
            TotalBlockTime={TotalBlockTime}
            NightTime={NightTime}
            IFRTime={IFRTime}
            DualTime={DualTime}
            PICTime={PICTime}
            InstructorTime={InstructorTime}
            CopilotTime={CopilotTime}
            Type={Type}
            Registration={Registration}
            SinglePilot={SPorMP === 'SinglePilot' ? SEorME:null}
            MultiPilot={SPorMP === 'MultiPilot' ? SEorME:null}
            PIC={PIC}
            Remarks={Crew+PICUSTime+TextRemarks+RemarkAutoland+RemarkDiversion+RemarkGoAround+RemarkLineCheck+RemarkMonitoredApproach}
            />
        </Table>
        </>
    )
}

export default ReviewEntry