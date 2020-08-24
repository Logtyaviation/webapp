import React, { Component } from 'react';
import { Form, DropdownButton, InputGroup, Dropdown, Row, Col, Button } from 'react-bootstrap';
import { FieldArray, ErrorMessage } from 'formik'

class RatingsCertificatesAndPrivileges extends Component {
    render() {
        const {values, errors, handleChange} = this.props
        return (
            <>
            <div>Ratings, certificates and privileges</div>
           <FieldArray name='RatingsCertificatesAndPrivilegesList'>
                {({ insert, remove, push }) => (
                <>
                   <DropdownButton
                        drop='right'
                        title='Add'
                        onSelect={(eventKey) => push({RatingStyle:eventKey,RatingName:'', RatingsRemarks:''})}
                        >
                        <Dropdown.Item eventKey = 'Class/Type rating'>Class/Type rating</Dropdown.Item>
                        <Dropdown.Item eventKey = 'Certificate'>Certificate</Dropdown.Item>
                        <Dropdown.Item eventKey = 'Privilege'>Privilege</Dropdown.Item>    
                    </DropdownButton>
                    {values.RatingsCertificatesAndPrivilegesList.length > 0 &&
                    values.RatingsCertificatesAndPrivilegesList.map((ClassTypeCertifPrivilege, index) => (
                        <Row key={index}>
                            <Col md='4'>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>{ClassTypeCertifPrivilege.RatingStyle}</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                    name={`ClassTypeCertifPrivilege.${index}.RatingName`}
                                    id={`ClassTypeCertifPrivilege.${index}.RatingName`}
                                    placeholder={
                                        ClassTypeCertifPrivilege.RatingStyle === 'Class/Type rating' ? 
                                        'Ex: B737 300-900':
                                        ClassTypeCertifPrivilege.RatingStyle === 'Certificate' ?
                                        'TDB':'Ex: PBN'
                                    }
                                    value={values.RatingsCertificatesAndPrivilegesList[index].RatingName}
                                    onChange={handleChange}
                                    //isValid={values.RatingsCertificatesAndPrivilegesList[index].RatingStyle && !errors.RatingsCertificatesAndPrivilegesList[index].RatingStyle}
                                    //isInvalid={!!errors.RatingsCertificatesAndPrivilegesList[index].RatingStyle}
                                    />
                                    <ErrorMessage
                                        name={`ClassTypeCertifPrivilege.${index}.RatingName`}
                                        component='div'
                                        className='field-error'
                                    />
                                </InputGroup>
                            </Col>
                            <Col md='7'>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Remarks/Restriction</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                    name={`ClassTypeCertifPrivilege.${index}.RatingsRemarks`}
                                    id={`ClassTypeCertifPrivilege.${index}.RatingsRemarks`}
                                    as='textarea'
                                    rows='1'
                                    placeholder='Ex: TDB'
                                    value={values.RatingsCertificatesAndPrivilegesList[index].RatingsRemarks}
                                    //isValid={values.RatingsCertificatesAndPrivilegesList[index].RatingsRemarks && !errors.RatingsCertificatesAndPrivilegesList[index].RatingsRemarks}
                                    //isInvalid={!!errors.RatingsCertificatesAndPrivilegesList[index].RatingsRemarks}
                                    />
                                    <ErrorMessage
                                        name={`ClassTypeCertifPrivilege.${index}.RatingsRemarks`}
                                        component='div'
                                        className='field-error'
                                    />
                                </InputGroup>
                            </Col>
                            <Col md='1'>
                                <Button onClick={() => remove(index)} variant='danger'>Delete</Button>
                            </Col>
                        </Row>
                    ))}
                </>    
                )}
           </FieldArray> 
           </>
        );
    }
}

export default RatingsCertificatesAndPrivileges;