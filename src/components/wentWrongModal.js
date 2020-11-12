import React , {Component} from 'react'
import { Modal, Button } from 'react-bootstrap'

class SomethingWentWrong extends Component {

    constructor(props){
        super(props)
        this.handleClose=this.handleClose.bind(this)
    }

    handleClose(){
        this.props.setShow(false)
    }

    render(){
        return (
            <>
              <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Oops, something went wrong...</Modal.Title>
                </Modal.Header>
                <Modal.Body>Sorry, an error occured while loging you on. Please try again</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
    }
  
}

  export default SomethingWentWrong;