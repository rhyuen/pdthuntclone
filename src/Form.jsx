import React, {Component} from "react";
import styled from "styled-components";

export default class Form extends Component{
    state = {
        name: "",
        email: "",
        number: "",
        optIn: true
    }

    handleChange = str => e => {
        this.setState({
            [str]: e.currentTarget.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            name: "", 
            email: "", 
            number: "", 
            optIn: true
        });
    }

    handlePromotionClick = e => {
        this.setState(prevState => {
            return {
                ...prevState, 
                optIn: !prevState.optIn
            };            
        });
    }

    render(){
        return (
            <form data-testid = "addUserForm" onSubmit = {this.handleSubmit}>
                <h2>Login Please</h2>
                <input data-testid = "name" type = "text" onChange = {this.handleChange("name")} placeholder = "Name" value = {this.state.name}/>
                <input data-testid = "email" type = "text" onChange = {this.handleChange("email")} placeholder = "Email" value = {this.state.email}/>
                <input data-testid = "number" type = "text" onChange = {this.handleChange("number")} placeholder = "Number" value = {this.state.number}/>
                <div>
                    <input data-testid = "checked" type = "checkbox" checked = {this.state.optIn} onClick = {this.handlePromotionClick}/>
                    <span>Optin Stuff</span>
                </div>
                <button type = "submit" data-testid = "submitButton">Submit</button>
            </form>
        );
    }
}

