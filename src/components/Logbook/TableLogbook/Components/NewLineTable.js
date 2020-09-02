import React, {useState} from 'react'
import '../TableLogbook.css'
import { Button, Row } from 'react-bootstrap'
import ModalRemarks from './ModalRemarks'

const  NewLineTable = (props) => {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const crewMembersMapper = props.data.Crew.map(index => {
        return (
            <Row>
            - {index.Rank === 'Custom' ? index.CustomRank:index.Rank}: {index.FirstName} {index.LastName}
            </Row>
        )
    })

    const NewLineTableFunction = () => {
        return(
            <>
            <tr>
                <td>{props.data.TakeOffDate}</td>
                <td>{props.data.TakeOffTime}</td>
                <td>{props.data.TakeOffAirport}</td>
                <td>{props.data.LandingDate}</td>
                <td>{props.data.LandingTime}</td>
                <td>{props.data.LandingAirport}</td>
                <td>{props.data.PIC}</td>
                <td className='nobreak'>{props.data.Type}</td>
                <td className='nobreak'>{props.data.Registration}</td>
                <td>{props.data.SPorMP === 'SinglePilot' ? props.data.SEorME:null}</td>
                <td>{props.data.SPorMP === 'MultiPilot' ? props.data.SEorME:null}</td>
                <td>{props.data.TakeOffDayOrNight === 'TakeOffByDay' ? props.data.TakeOffsAmount:null}</td>
                <td>{props.data.TakeOffDayOrNight === 'TakeOffByNight' ? props.data.TakeOffsAmount:null}</td>
                <td>{props.data.LandingDayOrNight === 'LandingByDay' ? props.data.LandingsAmount:null}</td>
                <td>{props.data.LandingDayOrNight === 'LandingByNight' ? props.data.LandingsAmount:null}</td>
                <td>{props.data.IFRTime}</td>
                <td>{props.data.NightTime}</td>
                <td>{props.data.PICTime}</td>
                <td>{props.data.CopilotTime}</td>
                <td>{props.data.DualTime}</td>
                <td>{props.data.InstructorTime}</td>
                <td>{props.data.TotalBlockTime}</td>
                <td><Button variant='outline-light' size='sm' onClick={handleShow}>Show</Button></td>
                <td><Button variant='outline-info' size='sm'>Modify</Button></td>
                <td><Button variant='outline-danger' size='sm'>Delete</Button></td>
            </tr>
            <ModalRemarks 
            data={props.data}
            handleShow={handleShow}
            handleClose={handleClose}
            show={show}
            crewMembersMapper={crewMembersMapper}
            />
            </>
        )
    }

    const array=[]
            for (let j=0;j<props.p;j++){
                array.push(NewLineTableFunction())
            }
        return array

}
            


export default NewLineTable