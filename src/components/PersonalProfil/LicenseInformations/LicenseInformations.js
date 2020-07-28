import React, { Component } from 'react';
import LicenseStateNumberDate from './SubComponents/LicenseStateNumberDate';
import LicenseTypeValidityRemarks from './SubComponents/LicenseTypeValidityRemarks';
import RatingsCertificatesAndPriviliges from './SubComponents/RatingsCertificatesAndPriviliges';

class LicenseInformations extends Component {
    render() {
        return (
            <>
              <LicenseStateNumberDate/>
              <LicenseTypeValidityRemarks/>
              <RatingsCertificatesAndPriviliges/>  
            </>
        );
    }
}

export default LicenseInformations;