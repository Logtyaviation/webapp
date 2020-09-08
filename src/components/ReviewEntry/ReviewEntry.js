import React, {useState} from 'react'
import { Table, Row, Button, Container } from 'react-bootstrap'
import TableHeader from '../Logbook/FlightsLogbook/Components/TableHeader'
import NewLineTable from '../Logbook/FlightsLogbook/Components/NewLineTable'
import { Redirect } from 'react-router-dom'

const ReviewEntry = (props) => {

    const [flightEntries] = useState(props.location.state)
    const [redirect, setRedirect] = useState(false)

    return(
        <>
            {redirect ? <Redirect to={{pathname:'/NewFlightEntry', state:[...flightEntries]}}/> : 
            <>
            <Table bordered hover variant='dark' striped>
                <TableHeader/>
                <tbody>
                {flightEntries.map((entry) => {
                    return(
                        <NewLineTable p={1} 
                        data={entry}
                        />
                    )
                })}
                </tbody>
            </Table>
            <Container fluid>
                <Row>
                    <Button onClick={() => setRedirect(true)}>Add new entry</Button>
                </Row>
                <Row>
                    <Button>Submit to logbook</Button>
                </Row>
            </Container>
            </>
        }
        </>
    )
}

export default ReviewEntry