import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class GeneralLoggedInNavBar extends Component {
    constructor(props){
        super(props)
        this.state=({
            LogbookHolderFirstName:'Xavier',
            LogbookHolderLastName:'Solse'
        })
    }

    render() {
        return (
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href='/'>Logty</Navbar.Brand>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/Table'>Logbook</Nav.Link>
                    <Nav.Link href='/NewFlightEntry'>Add flight(s)</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title={this.state.LogbookHolderFirstName+' '+this.state.LogbookHolderLastName}>
                        <NavDropdown.Item href=''>Manage my account</NavDropdown.Item>
                        <NavDropdown.Item href=''>View my profile</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href=''>Log out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default GeneralLoggedInNavBar;