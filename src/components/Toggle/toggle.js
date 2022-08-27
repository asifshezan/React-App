import React, { useState } from "react";

const Toggle = () => {

    const [toggle, setToggle] = useState(true);
    return (
        <div style={{ backgroundColor: "yellow", margin: "1rem", padding:"1rem"}}>
            {toggle && (
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            )} 
        <div style={{textAlign: "center", marginRight:"2rem"}}>
            <button onClick={()=>{setToggle(!toggle)}}>{toggle ? 'Hide' : 'Show'}</button>
        </div>
        </div>
    )
}

export default Toggle;