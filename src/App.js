import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TableLogbook from './components/Logbook/TableLogbook/TableLogbook';
import FlightEntry from './components/NewEntry/FlightEntry';
import TestComponent from './components/TestComponent';
import CreateNewProfil from './components/PersonalProfil/CreateNewProfil';
import RegisterPage from './components/Register/RegisterPage'
import Homepage from './components/Homepage/Homepage';
import ReviewEntry from './components/ReviewEntry/ReviewEntry'


class Logty extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' component={Homepage}/>
          <Route path='/Table' component={TableLogbook}/>
          <Route path='/NewFlightEntry' component={FlightEntry}/>
          <Route path='/ReviewEntry' component={ReviewEntry}/>
          <Route path='/TestPage' component={TestComponent}/>
          <Route path='/CreateNewProfil' component={CreateNewProfil}/>
          <Route path='/Register' component={RegisterPage}/>
        </div>
      </Router>
    )
  }
}

export default Logty;
