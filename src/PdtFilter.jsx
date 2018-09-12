import React, {Component} from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import styled from "styled-components";

const Filter = ({data, onFilterChange}) => {
    const types = data.map(item => item.category);
    const noDupTypes = new Set(types);
    const gah = [...noDupTypes].map(type => {
        return (
            <span key = {uuid.v4()}>                
                <button onClick = {onFilterChange.bind(this, type)}>
                    {type}
                </button>
            </span>
        );
    });
    const all = <span key = {uuid.v4()}>
        <button onClick = {onFilterChange.bind(this, "All")}>
            All
        </button>
    </span>;
    return [all, ...gah];    
};


export default Filter;