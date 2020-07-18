import React, { Component } from 'react';
import LicenseStateNumberDate from './SubComponents/LicenseStateNumberDate';
import LicenseTypeValidityRemarks from './SubComponents/LicenseTypeValidityRemarks';

class LicenseInformations extends Component {
    render() {
        return (
            <>
              <LicenseStateNumberDate/>
              <LicenseTypeValidityRemarks/>  
            </>
        );
    }
}

export default LicenseInformations;