import React, {Component} from 'react'
import '../TableLogbook.css'
import { Button } from 'react-bootstrap'

class NewLineTable extends Component{
    
    render(){
            const array=[]
            for (let j=0;j<this.props.p;j++){
                array.push(this.NewLineTableFunction())
            }
        return array
    }

    NewLineTableFunction(){
        return(
            <tr>
                <td>{this.props.data.TakeOffDate}</td>
                <td>{this.props.data.TakeOffTime}</td>
                <td>{this.props.data.TakeOffAirport}</td>
                <td>{this.props.data.LandingDate}</td>
                <td>{this.props.data.LandingTime}</td>
                <td>{this.props.data.LandingAirport}</td>
                <td>{this.props.data.PIC}</td>
                <td className='nobreak'>{this.props.data.Type}</td>
                <td className='nobreak'>{this.props.data.Registration}</td>
                <td>{this.props.data.SPorMP === 'SinglePilot' ? this.props.data.SEorME:null}</td>
                <td>{this.props.data.SPorMP === 'MultiPilot' ? this.props.data.SEorME:null}</td>
                <td>{this.props.data.TakeOffDayOrNight === 'TakeOffByDay' ? this.props.data.TakeOffsAmount:null}</td>
                <td>{this.props.data.TakeOffDayOrNight === 'TakeOffByNight' ? this.props.data.TakeOffsAmount:null}</td>
                <td>{this.props.data.LandingDayOrNight === 'LandingByDay' ? this.props.data.LandingsAmount:null}</td>
                <td>{this.props.data.LandingDayOrNight === 'LandingByNight' ? this.props.data.LandingsAmount:null}</td>
                <td>{this.props.data.IFRTime}</td>
                <td>{this.props.data.NightTime}</td>
                <td>{this.props.data.PICTime}</td>
                <td>{this.props.data.CopilotTime}</td>
                <td>{this.props.data.DualTime}</td>
                <td>{this.props.data.InstructorTime}</td>
                <td>{this.props.data.TotalBlockTime}</td>
                <td><Button variant='outline-light' size='sm'>Show</Button></td>
            </tr>
        )
    }
    
}


export default NewLineTable