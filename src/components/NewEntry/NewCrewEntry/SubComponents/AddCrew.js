import React from "react";
//import ReactDOM from "react-dom";
import { Formik, ErrorMessage, FieldArray } from "formik";
import  * as yup from 'yup'
import { Col, Button, Row, InputGroup, Form, DropdownButton, Dropdown } from "react-bootstrap";

const schema = yup.array().of(yup.object({
    CrewFirstName:yup.string().required('Please enter the first name'),
    CrewLastName:yup.string().required('Please enter the last name'),
    CrewIsPIC:yup.string(),
    CustomRank:yup.string().required('Please enter the rank')
}).required())

const initialValues = {
  CrewList: 
    [{
        CrewFirstName: 'LogbookOwnerFirstName',
        CrewLastName: 'LogbookOwnerLastName',
        CrewRank: 'LogbookOwnerRank',
        CrewActedAsPIC: '',
        CustomRank:''
    }]
};

const AddCrew = () => (
  <div>
    <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        }}
    >
      {({ 
        handleSubmit,
        handleChange,
        values,
        errors,      
    }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <FieldArray name='CrewList'>
            {({ insert, remove, push }) => (
              <div>
                <DropdownButton
                    drop='right'
                    title='Add crew member'
                    onSelect={(eventKey) => push({CustomRank:eventKey, CrewRank:eventKey, CrewFirstName:'', CrewLastName:'', CrewActedAsPIC:''})}
                    >
                    <Dropdown.Item eventKey='Captain'>Captain</Dropdown.Item>
                    <Dropdown.Item eventKey='First Officer'>First Officer</Dropdown.Item>
                    <Dropdown.Item eventKey='Custom'>Custom</Dropdown.Item>
                </DropdownButton>
                {values.CrewList.length > 0 &&
                 values.CrewList.map((CrewMember, index) => (
                    <Row key={index}>
                        {CrewMember.CrewRank === 'Custom' ? 
                        <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Rank</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control 
                                placeholder='Ex: Captain'
                                name={`CrewList.${index}.CustomRank`}
                                id={`CrewList.${index}.CustomRank`}
                                onChange={handleChange}
                                />
                            </InputGroup>
                        </Col>
                        :CrewMember.CrewRank}
                        <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>First</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control 
                                placeholder='Ex: Neil'
                                disabled={index === 0}
                                name={`CrewList.${index}.CrewFirstName`}
                                id={`CrewList.${index}.CrewFirstName`}
                                value={CrewMember.CrewFirstName}
                                isValid={index === 0 ? null:CrewMember.CrewFirstName && !errors.CrewList[index].CrewFirstName}
                                isInvalid={index === 0 ? null:errors.CrewList ? !!errors.CrewList[index].CrewFirstName:null}
                                onChange={handleChange}
                                />
                            </InputGroup>
                            <ErrorMessage
                                name={`CrewList.${index}.CrewFirstName`}
                                component='div'
                                className='field-error'
                            />
                        </Col>
                        <Col>
                            <InputGroup>    
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Last</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control 
                                placeholder='Ex: Armstrong'
                                disabled={index === 0}
                                name={`CrewList.${index}.CrewLastName`}
                                id={`CrewList.${index}.CrewLastName`}
                                value={CrewMember.CrewLastName}
                                onChange={handleChange}
                                />
                            </InputGroup>
                        </Col>
                    <Col md={3}>
                        <Form.Check
                        type='radio'
                        name={`CrewList.${index}.CrewActedAsPIC`}
                        label='Acted as PIC'/>
                    </Col>
                    <Col>
                        {index === 0 ? 
                        null : <Button onClick={() => remove(index)}>Delete</Button>}
                    </Col>
                </Row>
                  ))}
              </div>
            )}
          </FieldArray>
          <Button type='submit'>Next</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default AddCrew