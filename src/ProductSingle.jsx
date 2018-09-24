import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import productData from "./productdata.json";

const ProductSingle = ({ match }) => {
  const single = productData.data.filter(
    pdt => pdt.name === match.params.name
  )[0];
  const longerDescription = single.fullDescription
    ? single.fullDescription
    : "No longer description was filled out.";

  return (
    <div>
      <h1>{single.name}</h1>
      <p>{single.description}</p>
      <p>{longerDescription}</p>
      <p>{single.count}</p>
      <p>{single.category}</p>
      <p>
        Adding a list of suggestions as well as click outside to return to home.
      </p>
    </div>
  );
};

ProductSingle.propTypes = {
  match: PropTypes.string.isRequired
};

export default ProductSingle;
