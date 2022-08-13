import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const todoTitle = "She is my wife.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearFull = date.getFullYear();

const headingStyle = {
    background: "purple",
    color: "white",
    textAlign: "center",
    padding: "10px"
}

root.render(
    <div>
        {/* External Css */}
    <h1 style={headingStyle}>React App</h1>

        {/* Inline Css */}
    <h2 style={{ color:"blue", fontSize:"20px", fontFamily: "sans-serif", textTransform:"uppercase"}}>{ todoTitle }</h2> 
    
        {/* Style-Sheet  style.css file*/}
    <h1 className='heading largetext'>Welcome Asif</h1>

    <p>lorem ipsum is a dubbing text website.</p>
    <h2>To make aa good app.</h2>
    <h3>{ dateName + "/" + monthName + "/" + yearFull }</h3>
    </div>

);
