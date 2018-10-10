import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FormContainer = styled.div`
  background: white;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1vw;
`;
const StyledForm = styled.form``;

const PdtForm = ({
  onSubmit,
  onInputChange,
  nameValue,
  categoryValue,
  descriptionValue
}) => {
  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="pdtName"
          onChange={onInputChange}
          value={nameValue}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          name="pdtDescription"
          onChange={onInputChange}
          value={descriptionValue}
        />
        <br />
        <input
          type="text"
          placeholder="Category"
          name="pdtCategory"
          onChange={onInputChange}
          value={categoryValue}
        />
        <br />
        <input type="submit" />
      </form>
    </FormContainer>
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
