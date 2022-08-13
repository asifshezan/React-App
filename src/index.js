import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Card from './components/Card';

// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));




// const headingStyle = {
//     background: "purple",
//     color: "white",
//     textAlign: "center",
//     padding: "10px"
// }

root.render(
    <div>
            {/* <h1 className='headingStyle'>React App</h1> */}

    <App />
        {/* External Css */}
    {/* <h1 style={ headingStyle }>React App</h1> */}

        {/* Inline Css */}
    {/* <h2 style={{ color:"blue", fontSize:"20px", fontFamily: "sans-serif", textTransform:"uppercase"}}>{ todoTitle }</h2>  */}
    
        {/* Style-Sheet  style.css file*/}
    {/* <h1 className='heading largetext'>Welcome Asif</h1> */}

    {/* <Card />
    <Card />
    <Card /> */}
    

    
</div>

);
