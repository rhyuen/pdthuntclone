import React, {Component} from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import styled from "styled-components";

const List = ({data, onClickCloseButton, onClickUpvote, onSubscribe, onClickSaveForLater}) => {
    const listOfItems = data.map(curr => {
        const upped = curr.upped ? 
            <button>Upped</button> : 
            (<button onClick = {onClickUpvote.bind(this, curr.id)}>+</button>);
        const subbed = curr.subscribed ? 
            <button>Subbed</button> : 
            <button onClick = {onSubscribe.bind(this, curr.id)}>Subscribe</button>;
        const saved = curr.saved ?
            <button>Saved</button> : 
            <button onClick = {onClickSaveForLater.bind(this, curr.id)}>SaveForLater</button>;
        return (
            <div key = {curr.id}>                    
                <div>{curr.name}</div>
                <div>{curr.description}</div>
                <div>{curr.category}</div>
                <span>{curr.count}</span>    
                <div>
                    {upped}
                    {subbed}
                    {saved}
                    <button onClick = {onClickCloseButton.bind(this, curr.id)}>X</button>
                </div>                                
            </div>
        );
    });    
    return listOfItems;
};

export default List;