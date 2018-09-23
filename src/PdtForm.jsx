import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PdtForm = ({
    onSubmit,
    onInputChange, 
    nameValue, 
    categoryValue, 
    descriptionValue
}) => {    
    return(
        <form onSubmit = {onSubmit}>
            <input type = "text" 
                placeholder = "Name" 
                name = "pdtName"
                onChange ={onInputChange} 
                value = {nameValue} 
                /><br/>
            <input type = "text" 
                placeholder = "Description" 
                name = "pdtDescription"
                onChange = {onInputChange} 
                value = {descriptionValue} 
                /><br/>
            <input type = "text" 
                placeholder = "Category" 
                name = "pdtCategory"
                onChange = {onInputChange} 
                value = {categoryValue} 
                 /><br/>
            <input type = "submit"/>
        </form>        
    );
};

PdtForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    nameValue: PropTypes.string,
    categoryValue: PropTypes.string,
    descriptionValue: PropTypes.string
};
   

export default PdtForm;