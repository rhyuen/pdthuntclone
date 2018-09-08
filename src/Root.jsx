import React from "react";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import styled from "styled-components";
import App from "./App.jsx";
import Nav from "./Nav.jsx";
import Subscribed from "./Subscribed.jsx";
import Me from "./Me.jsx";
// import Personal from "./Personal.jsx";

const STX = styled.div`
        width: 100%;
        display: flex;                
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
    `;
const Root = () => {    
    return (
        <Router>            
            <STX>
                <Nav/>                        
                <Route exact path = "/" component = {App}/>    
                <Route exact path = "/subscribed" component = {Subscribed}/>
                <Route exact path = "/me" component = {Me}/>
            </STX>            
        </Router>
    );
};


export default Root;