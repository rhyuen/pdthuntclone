import React, {Component} from "react";
import styled from "styled-components";
import PdtList from "./PdtList.jsx";
import productFile from "./productdata.json";
import uuid from "uuid";
import Form from "./PdtForm.jsx";
import Nav from "./Nav.jsx";
import AdPanel from "./AdPanel.jsx";

class App extends Component{
    state = {   
      data: [],
      pdtName : "name",
      pdtDescription: "desc",
      pdtCategory: "cat"
    }   

    componentDidMount(){
        const withId = productFile.data.map(item => {
            return Object.assign(item, {
                id: uuid.v4(), 
                subscribed: false, 
                upped: false
            });
        });
        this.setState(prevState => {
            return {
                ...prevState,
                data: withId
            };
        });
    }

    handleInputChange = e => {
        console.log(e.currentTarget.name);
        let currValue = e.currentTarget.value;
        let currInput = e.currentTarget.name;
        
        this.setState(prevState => {  
            let change = {};
            switch(currInput){
                case "pdtName":
                    change = {pdtName: currValue};
                    break;
                case "pdtDescription":
                    change = {pdtDescription: currValue};
                    break;
                case "pdtCategory":
                    change = {pdtCategory: currValue};
                    break;
            }                          
            return Object.assign(prevState, change);
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.state.pdtName;
        const category = this.state.pdtCategory;
        const description = this.state.pdtDescription;
        const id = uuid.v4();
        let updated = this.state.data.concat({
            id,
            name,
            category,
            description,
            voted: false,
            count: 0
        });
        if(name === "" || category === "" || description === ""){
            return this.setState(prevState => {
                return prevState;
            });
        }

        this.setState({                        
            data: updated,
            pdtName: "",
            pdtCategory: "",
            pdtDescription: ""            
        });
    }

    // handleInputChange = name => e => {
    //     this.setState(prevState => {
    //         return{
    //             ...prevState,
    //             [name]: e.currentTarget.value
    //         };
    //     });
    // }

    handleUpvote = (id, e) => {
        this.setState(prevState => {
            let updated = prevState.data.map(curr => {
                if(id !== curr.id){
                    return curr;
                }else if(curr.upped){
                    return curr;
                }else{
                    return Object.assign(curr, {
                        count: curr.count + 1,
                        upped: true
                    });
                }
            });
            return {
                ...prevState,
                data: updated
            };
        });
    }

    handleSubscribe = (id, e) => {
        this.setState(prevState => {
            let updated = prevState.data.map(curr => {
                if(id !== curr.id){
                    return curr;
                }else if(curr.subscribed){
                    return curr;
                }else{
                    return Object.assign(curr, {
                        subscribed: true
                    });
                }
            });
            return {
                ...prevState,
                data: updated
            };
        });
    }

    handleCloseButton = (id, e) => {        
        this.setState(prevState => {
            let updated = prevState.data.filter(curr => {
                if(id !== curr.id){
                    return curr;
                }
            });
            return {
                ...prevState,
                data: updated
            };
        });
    } 

    render(){                                       
        return (         
            <div>                
                <Form onSubmit = {this.handleSubmit}
                    nameValue = {this.state.pdtName}
                    descriptionValue = {this.state.pdtDescription}
                    categoryValue = {this.state.pdtCategory}
                    onInputChange = {this.handleInputChange}/>                    
                <PdtList data = {this.state.data}
                    onClickUpvote = {this.handleUpvote}
                    onSubscribe = {this.handleSubscribe}
                    onClickCloseButton = {this.handleCloseButton}/>      
                <AdPanel/>          
            </div>                                        
        );
    }
}

export default App;