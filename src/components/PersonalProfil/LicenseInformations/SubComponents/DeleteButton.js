import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class DeleteButton extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedKeys:[props.selectedKeys],
            index:props.index,
            testArray:[1,2,3]
        }
        this.handleDelete=this.handleDelete.bind(this)
        this.handleTest=this.handleTest.bind(this)
    }

    handleDelete(){
        const actualSelectedKeys = this.state.selectedKeys
        actualSelectedKeys.splice(this.props.index, 1)
        this.setState({
            selectedKeys:actualSelectedKeys
        })
    }

    handleTest(){
        const secondArray = this.state.testArray
        secondArray.splice(this.props.index,1)
        this.setState({
            testArray:secondArray
        },
        function callBack(){
            console.log(this.state)
        })
    }

    render() {
        return (
            <Button
            variant='danger'
            onClick={this.handleDelete}
            >Delete</Button>
        );
    }
}

export default DeleteButton;