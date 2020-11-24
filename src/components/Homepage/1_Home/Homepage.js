import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import TopNavBar from '../../NavBars/TopNavBar';
import CardDeckHomePage from './CardDeckHomePage/CardDeckHomePage';

class Homepage extends Component {
    render(){
        return(
            <>
                <TopNavBar {...this.props}/>
                <Container fluid>
                    <CardDeckHomePage {...this.props}/>
                </Container>
            </>
        )
    }
}

export default Homepage;