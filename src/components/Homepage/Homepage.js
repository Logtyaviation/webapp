import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import CardDeckHomePage from './CardDeckHomePage/CardDeckHomePage';

class Homepage extends Component {
    render(){
        return(
            <>
                <Container>
                    <CardDeckHomePage/>
                </Container>
            </>
        )
    }
}

export default Homepage;