import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import TopNavBar from '../../NavBars/TopNavBar';
import CardDeckHomePage from './CardDeckHomePage/CardDeckHomePage';

class Homepage extends Component {
    render(){
        return(
            <>
                <Container fluid>
                    <TopNavBar/>
                    <CardDeckHomePage setAuthenticated={this.props.setAuthenticated}/>
                </Container>
            </>
        )
    }
}

export default Homepage;