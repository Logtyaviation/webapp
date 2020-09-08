import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FlightsLogbook from './components/Logbook/FlightsLogbook/FlightsLogbook';
import FlightEntry from './components/NewEntry/FlightEntry';
import TestComponent from './components/TestComponent';
import RegisterPage from './components/Register/RegisterPage'
import Homepage from './components/Homepage/Homepage';
import ReviewEntry from './components/ReviewEntry/ReviewEntry'
import PersonalProfil from './components/PersonalProfil/PersonalProfil';


class Logty extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' component={Homepage}/>
          <Route path='/FlightsTable' component={FlightsLogbook}/>
          <Route path='/NewFlightEntry' component={FlightEntry}/>
          <Route path='/ReviewEntry' component={ReviewEntry}/>
          <Route path='/TestPage' component={TestComponent}/>
          <Route path='/PersonalProfil' component={PersonalProfil}/>
          <Route path='/Register' component={RegisterPage}/>
        </div>
      </Router>
    )
  }
}

export default Logty;
