import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import productData from "./productdata.json";

const StyledPdtSingle = styled.div`
  background: lavender;
`;

const ProductSingle = ({ match }) => {
  const single = productData.data.filter(
    pdt => pdt.name === match.params.name
  )[0];
  console.log(single);
  let longerDescription = "hi guys";
  return (
    <StyledPdtSingle>
      <h1>{single.name}</h1>
      <p>{single.description}</p>
      <p>{longerDescription}</p>
      <p>{single.count}</p>
      <p>{single.category}</p>
      <p>
        Adding a list of suggestions as well as click outside to return to home.
      </p>
    </StyledPdtSingle>
  );
};

ProductSingle.propTypes = {
  match: PropTypes.string.isRequired
};

export default ProductSingle;
