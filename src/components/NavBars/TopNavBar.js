import React from 'react'
import { Form, Nav, Navbar, Button } from 'react-bootstrap'

const TopNavBar = (props) => {

    const options = {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    }

    function logout(){
        let responseText = ''
        fetch('http://localhost:3000/account/logout', options)
        .then(function(response) {
            return response.text().then(function(text){
                responseText = text
                if(responseText === 'disconnect user') {
                    props.setAuthenticated(false)
                }
            })
        })
        .catch((response) => console.log(response))
    }

    return(
        <>
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='/home'>Logty</Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link href='/home'>Home</Nav.Link>
                <Nav.Link>My profil</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="outline-info" className="mr-sm-2" onClick={logout}>Log out</Button>
            </Form>
        </Navbar>
        </>
    )
}

export default TopNavBar;