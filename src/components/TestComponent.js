import React, { Component } from 'react';
import NewCrewEntry from './NewEntry/NewCrewEntry/NewCrewEntry';
import GeneralLoggedInNavBar from './NavBars/GeneralLoggedInNavBar';

class TestComponent extends Component {
    
    render(){
        return(
            <>
                <GeneralLoggedInNavBar/>
                <NewCrewEntry/>
            </>
        )
    }
}
export default TestComponent;