import React from "react";
import Event_Handler from './Event_Handler/index';
// import Conditional_Rendering from "./components/Conditional_Rendering/index.js";
import './style.css'
// import State from "./State";

// import List from "./components/UniqueList/List";
// import Card from "./components/Card";
// import Data from "./data.json";
// import Card2 from "./components/Card2";
// import Card3 from "./components/card3";
// import ReactBootstrap from "./components/React_Bootstrap/ReactBootstrap";

// const users = [
//     {
//         fullName : "Asif Ahamed",
//         email : "asifshezan7@gmail.com",
//         phones : [
//             {home : "01121545"}, {office : "01521131545"}
//         ]
//     },
//     {
//         fullName : "Sonia Akter",
//         email : "soniafridi98@gmail.com",
//         phones : [
//             {home : "016554513"}, {office : "011265461"}
//         ]
//     }
// ];


function App(){

    // let items = [];
    // items = Data.map((item) => <Card titleText = {item.title} descText = {item.desc} /> );


    // for (let x = 0; x < Data.length; x++) {
    //     items.push( <Card titleText= { Data[x].title } descText= { Data[x].desc }/> );
    // }


    return (<div>
        <h1 className='headingStyle'>React App</h1>

        <Event_Handler />


        {/* <Conditional_Rendering /> */}
        {/* <ReactBootstrap  /> */}
        {/* <Card2 name="Asif Ahamed" age="23"/>
        <Card3 email="asifshezan7@gmail.com" /> */}

        {/* {
            users.map((user, index) =>
            <article>
                <h2>{ user.fullName }</h2>
                <h3>{ user.email }</h3>
                {
                    user.phones.map((phone, index)=>
                    
                    <div key={index}>
                        <h4>{phone.home}</h4>
                        <h4>{phone.office}</h4>
                    </div>
                    )
                }
            </article>
            )
        } */}


        {/* { Data.map((item, index) => <Card key={index} titleText = {item.title} descText = {item.desc} /> ) }
        <List />
        {items} */}
    </div>
    );
}


export default App;