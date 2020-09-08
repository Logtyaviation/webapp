import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const GeneralNavBar = (props) => {
    const { HolderLastName, HolderFirstName } = props

    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='/'>Logty</Navbar.Brand>
            <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/NewFlightEntry'>New entry</Nav.Link>
                <NavDropdown title='Logbook'>
                    <NavDropdown.Item href='/FlightsTable'>Flights</NavDropdown.Item>
                    <NavDropdown.Item href=''>Simulators</NavDropdown.Item> 
                </NavDropdown>
            </Nav>
            <Nav>
                <NavDropdown title={HolderFirstName+' '+HolderLastName}>
                    <NavDropdown.Item href='/PersonalProfil'>Manage my profil</NavDropdown.Item>
                    <NavDropdown.Item href=''>View my profile</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href=''>Log out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}


export default GeneralNavBar;