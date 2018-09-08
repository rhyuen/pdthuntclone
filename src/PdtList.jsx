import React, {Component} from "react";
import styled from "styled-components";

const Filter = ({data}) => {
    const types = data.map(item => item.category);
    const noDupTypes = new Set(types);
    const gah = [...noDupTypes].map(type => {
        return (
            <span>{type}</span>
        );
    });
    return gah;
};

const List = ({data, onClickCloseButton, onClickUpvote, onSubscribe}) => {
    const listOfItems = data.map(curr => {
        const upped = curr.upped ? 
            <button>Upped</button> : 
            (<button onClick = {onClickUpvote.bind(this, curr.id)}>+</button>);
        const subbed = curr.subscribed ? 
            <button>Subbed</button> : 
            (<button onClick = {onSubscribe.bind(this, curr.id)}>Subscribe</button>);
        return (
            <div key = {curr.id}>                    
                <div>{curr.name}</div>
                <div>{curr.description}</div>
                <div>{curr.category}</div>
                <span>{curr.count}</span>    
                <div>
                    {upped}
                    {subbed}
                    <button>SaveForLater</button>
                    <button onClick = {onClickCloseButton.bind(this, curr.id)}>X</button>
                </div>                                
            </div>
        );
    });    
    return listOfItems;
};

export default (props) => {   
    return (
        <div>
            <Filter data = {props.data}/>
            <List {...props}/>            
        </div>        
    );
}

class AdPanel extends Component{
    state = {
        data: props.data
    }

    handleFilterChange = (name, e) => {

    }

    render(){
        return (
            <div>
                <Filter data = {props.data} onFilterChange = {this.handleFilterChange}/>
                <List {...props}/>            
            </div>
        );
    }
}