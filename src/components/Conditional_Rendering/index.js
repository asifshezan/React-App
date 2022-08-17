import React, {Component} from 'react'
import HomePage from './HomePage'
import LogIn from './LogInPage'

class Conditional_Rendering extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn : true
        }
    }

    // if-else rendering

    render(){
        if(this.state.isLoggedIn){
            return <HomePage />
        }else{
            return <LogIn />
        }
    }
}

export default Conditional_Rendering;