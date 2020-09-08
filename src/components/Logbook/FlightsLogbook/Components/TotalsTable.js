import React, {Component} from 'react'

class TotalsTable extends Component{
    render(){
        return(
            <thead>
                <tr>
                    <th rowSpan="2" colSpan="7">TBDeleted</th>
                    <th className="text-right align-middle" rowSpan="2">Totals</th>
                    <th>This page</th>
                    <td>TPSinglePilot</td>
                    <td>TPMultiPilot</td>
                    <td>TPTOD</td>
                    <td>TPTON</td>
                    <td>TPLDGD</td>
                    <td>TPLDGN</td>
                    <td>TPIFR</td>
                    <td>TPNight</td>
                    <td>TPPIC</td>
                    <td>TPCopilot</td>
                    <td>TPDual</td>
                    <td>TPInstructor</td>
                    <td>TPTime</td>
                </tr>
                <tr>
                    <th>All times</th>
                    <td>ATSinglePilot</td>
                    <td>ATMultiPilot</td>
                    <td>ATTOD</td>
                    <td>ATTON</td>
                    <td>ATLDGD</td>
                    <td>ATLDGN</td>
                    <td>ATIFR</td>
                    <td>ATNight</td>
                    <td>ATPIC</td>
                    <td>ATCopilot</td>
                    <td>ATDual</td>
                    <td>ATInstructor</td>
                    <td>ATTime</td>
                </tr>
          </thead>
        )
    }
}

export default TotalsTable