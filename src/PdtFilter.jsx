import React from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import styled from "styled-components";

const RootContainer = styled.div`
  padding: 1vw;
`;
const ButtonContainer = styled.span`
  margin-right: 0.25vw;
`;
const StyledButton = styled.button`
  padding: 0.2vw 0.3vw;
  font-size: 11px;
  background: white;
  border: 2px solid #4842b7;
  text-transform: uppercase;
  border-radius: 5%;
  color: #343434;
  font-weight: 600;

  :hover {
    color: white;
    background: #4842b7;
  }
`;

const Filter = ({ data, onFilterChange }) => {
  const currSet = new Set();
  data.forEach(item => {
    currSet.add(item.category[0].toUpperCase());
  });

  //MAKE EVERYTHING IN THE SET, A BUTTON
  const filters = [...currSet].map(type => {
    return (
      <ButtonContainer key={uuid.v4()}>
        <StyledButton onClick={e => onFilterChange(type, e)}>
          {type}
        </StyledButton>
      </ButtonContainer>
    );
  });

  //MAKE THE DEFAULT FILTER
  const allFilter = (
    <ButtonContainer key={uuid.v4()}>
      <StyledButton onClick={e => onFilterChange("All", e)}>All</StyledButton>
    </ButtonContainer>
  );

  //PUT ALL BUTTONS IN ROOT CONTAINER
  return <RootContainer>{[allFilter, ...filters]}</RootContainer>;
};

Filter.propTypes = {
  data: PropTypes.array,
  onFilterChange: PropTypes.func.isRequired
};

export default Filter;
