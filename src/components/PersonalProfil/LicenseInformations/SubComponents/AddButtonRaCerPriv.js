import React, { Component } from 'react';
import { Row, Col, DropdownButton, Dropdown, Container, Button } from 'react-bootstrap';
import NewLineRaCerPriv from './NewLineRaCerPriv';

class AddButtonRaCerPriv extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedKeys:[],
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
    }

    handleChange(eventKey){
        const newSelectedKeys = this.state.selectedKeys
        newSelectedKeys.push(eventKey)
        this.setState({
            selectedKeys:newSelectedKeys,
        }
        ,function callBack(){
            console.log(this.state)
        })
    }

    handleDelete(index){
        const actualSelectedKeys = this.state.selectedKeys
        actualSelectedKeys.splice(index, 1)
        this.setState({
            selectedKeys:actualSelectedKeys
        })
    }
    returnAddRaCerPriv(){
        /* map est une fonction disponible sur un array dans javascript.
         * Elle permet d'attribuer une valeur à chaque element dans cet array.
         * 
         * Exemple: 
         * const array = [a, b, c]
         * const mappedArray = array.map(function callback(element) {
         *  return <Component prop={element}/>
         * })
         * mappedArray sera egal à:
         * [<Component prop={a}/>, <Component prop={b}/>, <Component prop={c}/>]
         * 
         * On peut également abreger un callback de cette façon:
         * const mappedArray = array.map(element => <Component prop={element}/>)
         * 
         * Pour plus d'infos: 
         * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map
         * 
         */
        return(
            this.state.selectedKeys.map((selectedKey, index) => 
                <Row>
                    <Col md='11'>
                        <NewLineRaCerPriv theKey={selectedKey}/>
                    </Col>
                    <Col md='1'>
                        <Button
                        variant='danger'
                        /**
                         * avant en dessous y avait ecrit:
                         * 
                         * onClick={this.handleDelete}
                         * 
                         * du coup tu donne au gestionnaire d'evenement juste le nom de la fonction
                         * que tu aimerais qui soit executé. Sauf que nous on aimerai que cette fonction
                         * soit executé avec un index spécifique. Et mettre:
                         * 
                         * onClick={this.handleDelete(index)}
                         * 
                         * ne fonctionnera pas car la fonction sera directement executé (et qu'une seule fois)
                         * du coup on donne au gestionnaire d'evenements une fonction anonyme (aussi appelé
                         * lambda expression) "() => ..." qui elle executera this.handleDelete avec l'index souhaité:
                         * 
                         * onClick={() => this.handleDelete(index)}
                         */
                        onClick={() => this.handleDelete(index)}
                        >Delete</Button>                    
                    </Col>
                </Row>
            )
        );
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