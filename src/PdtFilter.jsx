import React from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import styled from "styled-components";

const Filter = ({ data, onFilterChange }) => {
  const types = data.map(item => item.category);
  const noDuplicateFilters = new Set(types);
  const filters = [...noDuplicateFilters].map(type => {
    return (
      <span key={uuid.v4()}>
        <button onClick={onFilterChange.bind(this, type)}>{type}</button>
      </span>
    );
  });
  const allFilter = (
    <span key={uuid.v4()}>
      <button onClick={onFilterChange.bind(this, "All")}>All</button>
    </span>
  );
  return [allFilter, ...filters];
};

Filter.propTypes = {
  data: PropTypes.array,
  onFilterChange: PropTypes.func.isRequired
};

export default Filter;
