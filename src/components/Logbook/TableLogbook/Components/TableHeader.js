import React, { Component } from 'react';

class TableHeader extends Component {
    render() {
        return (
            <thead>
                <tr className="text-center">
                    <th className="align-middle" colSpan="3">Departure</th>
                    <th className="align-middle" colSpan="3">Arrival</th>
                    <th className="align-middle nobreak" rowSpan="2">Name PIC</th>
                    <th className="align-middle" colSpan="2">Aircraft</th>
                    <th className="align-middle" colSpan="2">Operation</th>
                    <th className="align-middle" colSpan="2">Take offs</th>
                    <th className="align-middle" colSpan="2">Landings</th>
                    <th className="align-middle" colSpan="2">Flight conditions</th>
                    <th className="align-middle" colSpan="4">Function</th>
                    <th className="align-middle" rowSpan="2">Total time</th>
                    <th className="align-middle" rowSpan="2">Remarks</th>
                </tr>
                <tr>
                    <td>Date</td>
                    <td className="nobreak">Off Block</td>
                    <td>Place</td>
                    <td>Date</td>
                    <td className='nobreak'>On Block</td>
                    <td>Place</td>
                    <td>Type</td>
                    <td>Registration</td>
                    <td className='nobreak'>Single pilot</td>
                    <td className='nobreak'>Multi pilot</td>
                    <td>Day</td>
                    <td>Night</td>
                    <td>Day</td>
                    <td>Night</td>
                    <td>IFR</td>
                    <td>Night</td>
                    <td>PIC</td>
                    <td className='nobreak'>Co-pilot</td>
                    <td>Dual</td>
                    <td>Instructor</td>                       
                </tr>                
                </thead>
        );
    }
}

export default TableHeader;