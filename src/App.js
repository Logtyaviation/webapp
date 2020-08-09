import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import TableLogbook from './components/Table/Table';
import NewFlightEntry from './components/NewEntry/NewFlightEntry';
import TestComponent from './components/TestComponent';
import CreateNewProfil from './components/PersonalProfil/CreateNewProfil';
import RegisterPage from './components/Register/RegisterPage'


class Logty extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' component={Homepage}/>
          <Route path='/Table' component={TableLogbook}/>
          <Route path='/NewFlightEntry' component={NewFlightEntry}/>
          <Route path='/TestPage' component={TestComponent}/>
          <Route path='/CreateNewProfil' component={CreateNewProfil}/>
          <Route path='/Register' component={RegisterPage}/>
        </div>
      </Router>
    )
  }
}

export default Logty;
