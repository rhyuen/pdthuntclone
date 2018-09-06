import React, {Component} from "react";
import styled from "styled-components";
export default ({data, onClickCloseButton, onClickUpvote}) => {
    return data.map(curr => {
        return (
            <div key = {curr.id}>                    
                <span>{curr.name} || </span>
                <span>{curr.description}</span>
                <span>{curr.category} / </span>
                <span>{curr.count}</span>
                <button onClick = {onClickUpvote.bind(this, curr.id)}>+</button>                
                <button>Subscribe</button>
                <button>SaveForLater</button>
                <button onClick = {onClickCloseButton.bind(this, curr.id)}>X</button>
            </div>
        );
    });    
}