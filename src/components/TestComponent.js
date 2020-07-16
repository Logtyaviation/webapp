import React, { Component } from 'react';
import DateOfBirth from './PersonalProfil/GeneralInformations/SubComponents/DateOfBirth';
import FirstLastNames from './PersonalProfil/GeneralInformations/SubComponents/FirstLastNames';

class TestComponent extends Component {
    
    render(){
        return(
            <>
            <FirstLastNames/>
            <DateOfBirth/>
            </>
        )
    }
}
export default TestComponent;