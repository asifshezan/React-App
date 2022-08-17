import React, {Component} from 'react'
import HomePage from './HomePage'
import LogIn from './LogInPage'

class Conditional_Rendering extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn : false
        }
    }

    // element rendering

    render(){

        const {isLoggedIn} = this.state;
        let element;

        if(isLoggedIn){
            element = <HomePage />
        }else{
            element = <LogIn />
        }

        return(
            <div>
                {element}
            </div>
        )
    }
}

export default Conditional_Rendering;