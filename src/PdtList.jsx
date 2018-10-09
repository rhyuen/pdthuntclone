import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const List = ({
  username,
  data,
  onClickCloseButton,
  onClickUpvote,
  onSubscribe,
  onClickSaveForLater
}) => {
  const listOfItems = data.map(curr => {
    const upped = curr.count.includes(username) ? (
      <button>Upped</button>
    ) : (
      <button onClick={onClickUpvote.bind(this, curr._id)}>+</button>
    );
    const subbed = curr.subscribed.includes(username) ? (
      <button>Subbed</button>
    ) : (
      <button onClick={onSubscribe.bind(this, curr._id)}>Subscribe</button>
    );
    const saved = curr.subscribed.includes(username) ? (
      <button>Saved</button>
    ) : (
      <button onClick={onClickSaveForLater.bind(this, curr._id)}>
        SaveForLater
      </button>
    );

    return (
      <div key={curr._id}>
        <div>
          <Link to={`/product/${curr._id}`}>{curr.name}</Link>
        </div>
        <div>{curr.summaryDescription}</div>
        <div>{curr.category}</div>
        <span>{curr.count.length}</span>
        <div>
          {upped}
          {subbed}
          {saved}
          <button onClick={onClickCloseButton.bind(this, curr._id)}>X</button>
        </div>
      </div>
    );
  });
  return listOfItems;
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  onClickCloseButton: PropTypes.func.isRequired,
  onClickUpvote: PropTypes.func.isRequired,
  onSubscribe: PropTypes.func.isRequired,
  onClickSaveForLater: PropTypes.func.isRequired
};

export default List;
