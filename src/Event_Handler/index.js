import React, { Component } from 'react';

class Event_Handler extends Component {

    constructor(props){
        super(props)

        this.state = {
            changeValue : ''
        }
    }

    handOnChange = (e) => {

        this.setState({
            changeValue : e.target.value
        }, () => {
            console.log(this.state.changeValue)
        })

        // console.log(e.target.value);
    }


    render(){
        return(
            <div>
                <input type="text" onChange={this.handOnChange}></input>
                <p>{this.state.changeValue}</p>
            </div>
        )
    }
}

export default Event_Handler;