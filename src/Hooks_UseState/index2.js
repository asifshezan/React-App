import { Button } from "react-bootstrap";
import React, { useState } from "react";

function Hooks_UseState2(){

    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }



    return (
        <div>
            <h1>Count : {count}</h1>
            <Button onClick={handleIncrement}>Increase</Button>
            <Button style={{margin:"10px"}} onClick={handleDecrement}>Decrement</Button>
        </div>
    )
}

export default Hooks_UseState2;