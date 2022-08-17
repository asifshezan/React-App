import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import './style.css';

export default class State extends Component {

    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    render() {

        const {count} = this.state

        return (
        <div>
            <h1>Count : {count}</h1>
            <Button style={{padding: "10px",width: "60px",fontSize: "2rem", marginLeft: "5px"}} onClick={this.handleIncrement} disabled = {count === 6 ? true : false}>+</Button>
            <Button style={{padding: "10px",width: "60px",fontSize: "2rem", marginLeft: "25px"}} onClick = {this.handleDecrement} disabled={count === 0 ? true : false}>-</Button>
        </div>
        )
    }
}

