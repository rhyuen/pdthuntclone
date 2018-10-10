import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import productData from "./productdata.json";

const StyledPdtSingle = styled.div`
  background: lavender;
`;

const devApiRootUrl = "http://localhost:9873/product";

class ProductSingle extends Component {
  state = {
    data: {},
    isLoading: true
  };

  componentDidMount() {
    axios
      .get(`${devApiRootUrl}/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        this.setState(prevState => {
          return {
            ...prevState,
            data: res.data,
            isLoading: false
          };
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const loading = this.state.isLoading ? (
      <div>This is loading</div>
    ) : (
      <div>this is done loading</div>
    );

    const {
      category,
      count,
      summaryDescription,
      fullDescription,
      name
    } = this.state.data;
    return (
      <StyledPdtSingle>
        {loading}
        <section>
          <h1>{name}</h1>
          <h4>{category}</h4>
          <span>
            <span>
              <p>{count}</p>
            </span>
          </span>
          <span>
            <p>
              {summaryDescription ? (
                summaryDescription
              ) : (
                <div>no summary description</div>
              )}
            </p>
            <p>{fullDescription}</p>
          </span>
        </section>
        <p>
          Adding a list of suggestions as well as click outside to return to
          home.
        </p>
      </StyledPdtSingle>
    );
  }
}

ProductSingle.propTypes = {};

export default ProductSingle;
