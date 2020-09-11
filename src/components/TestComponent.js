import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';

class TestComponent extends Component {
    
    render(){
        return(
            <>
            <Sidebar
            holderFirstName='Xavier'
            holderLastName='Solse'/>
            </>
        )
    }
}
export default TestComponent;