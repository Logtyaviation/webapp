import React, { Component } from 'react';
import { Row, Col, DropdownButton, Dropdown, Container } from 'react-bootstrap';
import NewLineRaCerPriv from './NewLineRaCerPriv';

class AddButtonRaCerPriv extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedKeys: [] // ici j'utilise directement un array
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(eventKey){
        // chaque fois que le button add + eventKey correspondant sera cliqué on va ajouter
        // cet eventKey dans l'array selectedKeys. Sauf qu'on peut pas directement ajouter
        // un element à un array dans le state de react, du coup je le recupere dans 
        // une constante locale, on y ajoute le nouvel eventKey, puis j'écrase l'ancien array
        //it dans le state avec la constante locale
        const newSelectedKeys = this.state.selectedKeys
        newSelectedKeys.push(eventKey)
        this.setState({
            selectedKeys: newSelectedKeys
        }
        ,function callBack(){
            console.log(this.state)
        })
    }

    returnAddRaCerPriv(){
        /* map est une fonction disponible sur un array dans javascript.
         * Elle permet d'attribuer une valeur à chaque element dans cet array.
         * Exemple: 
         * const array = [a, b, c]
         * const mappedArray = array.map(element => {
         *  return <Component prop={element}/>
         * })
         * mappedArray sera egal à [<Component prop={a}/>, <Component prop={b}/>, <Component prop={c}/>]
         * 
         * Pour plus d'infos: 
         * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map
         * 
         * La façon de noter array.map(element => element*2) par exemple est une abreviation pour:
         * array.map(function callback(element) {
         *  return element*2
         * })
         */
        return this.state.selectedKeys.map((selectedKey) => {
            return <NewLineRaCerPriv theKey={selectedKey}/>
        })
    }

    render(){
        return(
           <Container fluid>
               <Row>
                <Col md='1'>
                        <DropdownButton
                        drop='right'
                        title='Add'
                        onSelect={this.handleChange}
                        >
                            <Dropdown.Item eventKey='ClassTypeRating'>Class/Type rating</Dropdown.Item>
                            <Dropdown.Item eventKey='Certificate'>Certificate</Dropdown.Item>
                            <Dropdown.Item eventKey='Privilege'>Privilege</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col md='11'>
                        {this.returnAddRaCerPriv()}
                    </Col>
               </Row>
           </Container>
        )
    }
}

export default AddButtonRaCerPriv;