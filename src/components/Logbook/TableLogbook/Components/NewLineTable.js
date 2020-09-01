import React, {Component} from 'react'

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
            <tbody>
                <tr>
                    <td>{this.props.TakeOffDate}</td>
                    <td>{this.props.TakeOffTime}</td>
                    <td>{this.props.TakeOffAirport}</td>
                    <td>{this.props.LandingDate}</td>
                    <td>{this.props.LandingTime}</td>
                    <td>{this.props.LandingAirport}</td>
                    <td>{this.props.PIC}</td>
                    <td>{this.props.Type}</td>
                    <td>{this.props.Registration}</td>
                    <td>{this.props.SinglePilot}</td>
                    <td>{this.props.MultiPilot}</td>
                    <td>{this.props.TakeOffByDay}</td>
                    <td>{this.props.TakeOffByNight}</td>
                    <td>{this.props.LandingByDay}</td>
                    <td>{this.props.LandingByNight}</td>
                    <td>{this.props.IFRTime}</td>
                    <td>{this.props.NightTime}</td>
                    <td>{this.props.PICTime}</td>
                    <td>{this.props.CopilotTime}</td>
                    <td>{this.props.DualTime}</td>
                    <td>{this.props.InstructorTime}</td>
                    <td>{this.props.TotalBlockTime}</td>
                    <td>{this.props.Remarks}</td>
                </tr>
            </tbody>
        )
    }
    
}


export default NewLineTable