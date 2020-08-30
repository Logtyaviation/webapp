import React from "react";
//import ReactDOM from "react-dom";
import { Formik, FieldArray } from "formik";
import  * as yup from 'yup'
import { Col, Button, Row, InputGroup, Form, DropdownButton, Dropdown } from "react-bootstrap";

const schema = yup.object({
    CrewList: yup.array().of(yup.object({
        CrewFirstName: yup.string().required('Please enter the first name'),
        CrewLastName: yup.string().required('Please enter the last name'),
        CrewRank: yup.string().required(),
        CustomRank: yup.string().when('CrewRank', {
            is: 'Custom',
            then: yup.string().required('Please enter the rank')
        })
    }).required()),
    PIC: yup.string().required()
});

const initialValues = {
    CrewList: [{
        CrewFirstName: 'Sami',
        CrewLastName: 'Bazoki',
        CrewRank: 'Captain',
        CustomRank:''
    }],
    PIC: ''
};


const isLogbookOwner = (index) => index === 0;

const hasValue = (object, key) => object !== undefined && object[key] !== undefined && object[key].length > 0;

const hasErrors = (errors, index, key) => {
    if (errors.CrewList !== undefined && errors.CrewList[index] !== undefined) {
        return errors.CrewList[index][key];
    }
    return false;
};

const isValid = ({ index, crewMember, key, errors }) => {
    if (!isLogbookOwner(index) && hasValue(crewMember, key) && !hasErrors(errors, index, key)) {
        return true;
    }
    return false;
};

const isInvalid = ({ index, errors, key }) => {
    if (!isLogbookOwner(index) && hasErrors(errors, index, key)) {
        return true;
    }
    return false;
};

const hasPIC = (PIC) => PIC !== '';


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
            {({ push, remove }) => (
              <div>
                <DropdownButton
                    drop='right'
                    title='Add crew member'
                    onSelect={(eventKey) => push({CustomRank:'', CrewRank:eventKey, CrewFirstName:'', CrewLastName:''})}
                    >
                    <Dropdown.Item eventKey='Captain'>Captain</Dropdown.Item>
                    <Dropdown.Item eventKey='First Officer'>First Officer</Dropdown.Item>
                    <Dropdown.Item eventKey='Custom'>Custom</Dropdown.Item>
                </DropdownButton>
                {values.CrewList.length > 0 &&
                 values.CrewList.map((CrewMember, index) => <Row key={index}>
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
                                     value={CrewMember.CustomRank}
                                     isValid={isValid({index, CrewMember, key: 'CustomRank', errors})}
                                     isInvalid={isInvalid({index, CrewMember, key: 'CustomRank', errors})}
                                     onChange={handleChange}
                                 />
                                 <Form.Control.Feedback type='invalid'>
                                     {hasErrors(errors, index, 'CustomRank') ? errors.CrewList[index].CustomRank : null}
                                 </Form.Control.Feedback>
                             </InputGroup>
                         </Col>
                         : CrewMember.CrewRank}
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
                                 isValid={isValid({index, CrewMember, key: 'CrewFirstName', errors})}
                                 isInvalid={isInvalid({index, CrewMember, key: 'CrewFirstName', errors})}
                                 onChange={handleChange}
                             />
                             <Form.Control.Feedback type='invalid'>
                                 {hasErrors(errors, index, 'CrewFirstName') ? errors.CrewList[index].CrewFirstName : null}
                             </Form.Control.Feedback>
                         </InputGroup>
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
                                 isValid={isValid({index, CrewMember, key: 'CrewLastName', errors})}
                                 isInvalid={isInvalid({index, CrewMember, key: 'CrewLastName', errors})}
                                 onChange={handleChange}
                             />
                             <Form.Control.Feedback type='invalid'>
                                 {hasErrors(errors, index, 'CrewLastName') ? errors.CrewList[index].CrewLastName : null}
                             </Form.Control.Feedback>
                         </InputGroup>
                     </Col>
                     <Col md={3}>
                         <Form.Check
                             type='radio'
                             name={`PIC`}
                             label='Acted as PIC'
                             value={values.PIC}
                             isInvalid={!hasPIC(values.PIC)}
                             onChange={(e) => {
                                 e.target.value = `${CrewMember.CrewFirstName} ${CrewMember.CrewLastName}`;
                                 handleChange(e);
                             }}
                         />
                         <Form.Control.Feedback type='invalid'>
                             {hasErrors(errors, index, 'CrewIsPIC') ? errors.CrewList[index].CrewIsPIC : null}
                         </Form.Control.Feedback>
                     </Col>
                     <Col>
                         { !isLogbookOwner(index) ? <Button onClick={() => remove(index)}>Delete</Button> : null }
                     </Col>
                 </Row>)}
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
