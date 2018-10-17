import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card.jsx";

const StyledForm = styled.form``;

const StyledTextInput = styled.input`
  border: 1px solid transparent;
  border-bottom: 3px solid #f9f9f9;
  margin-bottom: 1vw;
  &:focus {
    border-bottom: 3px solid #4842b7;
    outline: none;
  }
`;

const StyledSubmit = styled.input`
  background: #4842b7;
  color: white;
  border: 2px solid #4842b7;
  padding: 0.5vw 1vw;
  box-sizing: border-box;

  &:hover {
    background: white;
    color: #343434;
    border: 2px solid #4842b7;
  }

  &:focus {
    outline: none;
  }
`;

const PdtForm = ({
  onSubmit,
  onInputChange,
  nameValue,
  categoryValue,
  descriptionValue
}) => {
  return (
    <Card header="ADD MOAR THINGS.">
      <StyledForm onSubmit={onSubmit}>
        <StyledTextInput
          type="text"
          placeholder="Name"
          name="pdtName"
          onChange={onInputChange}
          value={nameValue}
        />
        <br />
        <StyledTextInput
          type="text"
          placeholder="Description"
          name="pdtDescription"
          onChange={onInputChange}
          value={descriptionValue}
        />
        <br />
        <StyledTextInput
          type="text"
          placeholder="Category"
          name="pdtCategory"
          onChange={onInputChange}
          value={categoryValue}
        />
        <br />
        <StyledSubmit type="submit" value="MOAR!" />
      </StyledForm>
    </Card>
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
