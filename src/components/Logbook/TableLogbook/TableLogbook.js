import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
import './TableLogbook.css'
import NewLineTable from './Components/NewLineTable'
import TotalsTable from './Components/TotalsTable'
import TableHeader from './Components/TableHeader'

class TableLogbook extends Component{
    
    render(){
        return(
            <Table bordered>
                <TableHeader/>
                <NewLineTable p={10}/>
                <TotalsTable />           
            </Table>
        )
    }
}

export default TableLogbook