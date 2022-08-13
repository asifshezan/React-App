import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const todoTitle = "She is my wife.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearFull = date.getFullYear();
root.render(
    <div>
    <h2>{ todoTitle }</h2>
    <p>lorem ipsum is a dubbing text website.</p>
    <h1>Welcome Asif</h1>
    <h2>To make aa good app.</h2>
    <h3>{ dateName + "/" + monthName + "/" + yearFull }</h3>
    </div>

);
