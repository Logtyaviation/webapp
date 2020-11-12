import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import FlightsLogbook from './components/Logbook/FlightsLogbook/FlightsLogbook';
import FlightEntry from './components/NewEntry/FlightEntry';
import TestComponent from './components/TestComponent';
import RegisterPage from './components/Homepage/3_Register/RegisterPage'
import Homepage from './components/Homepage/1_Home/Homepage';
import ReviewEntry from './components/ReviewEntry/ReviewEntry'
import PersonalProfil from './components/PersonalProfil/PersonalProfil';
import LoginPage from './components/Homepage/2_Login/LoginPage';


class Logty extends Component {

  constructor(props){
    super(props)
    console.log('logty constructor (app.js)')
    this.state = {
      isAuthenticated:false
    }
    this.setAuthenticated = this.setAuthenticated.bind(this)
  }

  setAuthenticated(isAuthenticated, cb = null) {
    this.setState({isAuthenticated}, () => {
      if(typeof cb === 'function') {
        console.log('state was set:', this.state.isAuthenticated)
        cb();
      }
    })
  }

  // isAuthentificated() {
  //   fetch('http://localhost:3000/account/authentification', {
  //     method: 'GET',
  //     headers: {'Content-type': 'application/json'},
  //   })
  //   .then(function(response){
  //     return response.text().then(function(text){
  //       if(text === 'authentificated') {
  //         console.log(text)
  //         this.setState({
  //           userAuthentificated:true
  //         })
  //         console.log(this.state.userAuthentificated)
  //       }
  //     })
  //   })
  //   .catch((response => console.log(response)))
  // }

  protectedRoute(path, Component, setAuthenticated){
    if(this.state.isAuthenticated) {
      console.log('1:', Component)
      return(
        <Route path={path} 
        render={(props) => (
          console.log(Component)
          //<Component {...props} setAuthenticated={setAuthenticated}/>
        )}/>
      )
    }
    else {
      return(
        <Redirect to='/'/>
      )
    }
  }

  render(){

    return(

      <Router>
        <>
          <Route exact path='/' render={(props) => (<LoginPage setAuthenticated={this.setAuthenticated} isAuthenticated={this.state.isAuthenticated}/>)}/>
          {/* <Route path='/Home' component={Homepage}/> */}
          {/*this.protectedRoute('/home', Homepage, this.setAuthenticated)*/}
          <Route path='/home' render={() => {
            if(this.state.isAuthenticated) {
              console.log('should be HERE')
              return <Homepage setAuthenticated={this.setAuthenticated}/>
            } else {
              console.log('should not be here')
              return <Redirect to='/'/>
            }
          }}/>
          <Route path='/FlightsTable' component={FlightsLogbook}/>
          <Route path='/NewFlightEntry' component={FlightEntry}/>
          <Route path='/ReviewEntry' component={ReviewEntry}/>
          <Route path='/TestPage' component={TestComponent}/>
          <Route path='/PersonalProfil' component={PersonalProfil}/>
          <Route path='/Register' component={RegisterPage}/>
        </>
      </Router>
    )
  }
}

export default Logty;
