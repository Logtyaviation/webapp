import React, { Component } from 'react';
import GeneralNavBar from './NavBars/GeneralNavBar';

class TestComponent extends Component {
    
    render(){
        return(
            <>
                <GeneralNavBar
                HolderFirstName='Xavier'
                HolderLastName='Solse'/>
            </>
        )
    }
}
export default TestComponent;