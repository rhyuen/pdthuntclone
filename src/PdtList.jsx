import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card.jsx";
import ListItem from "./ProductListItem.jsx";

const FigureContainer = styled.figure`
  margin: 0;
  background: ${props => props.theme.primaryColour};
  width: 4vw;
  height: 4vw;
`;

const TextContainer = styled.summary`
  box-sizing: border-box;
  padding-left: 1vw;
  font-size: 16px;
  line-height: 1.3333vw;
  position: relative;
  width: 100%;
`;

const ItemControl = styled.aside`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const ItemButton = styled.button`
  background: white;
  border: 2px solid ${props => props.theme.primaryColour};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  margin-left: 2px;

  &:hover {
    background: ${props => props.theme.primaryColour};
    color: white;
  }
`;

const ClickedButton = ItemButton.extend`
  background: ${props => props.theme.primaryColour};
  color: white;
`;
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
      <ClickedButton>{curr.count.length}</ClickedButton>
    ) : (
      <ItemButton onClick={onClickUpvote.bind(this, curr._id)}>+</ItemButton>
    );
    const subbed = curr.subscribed.includes(username) ? (
      <ClickedButton>Subbed</ClickedButton>
    ) : (
      <ItemButton onClick={onSubscribe.bind(this, curr._id)}>Sub</ItemButton>
    );
    const saved = curr.saved.includes(username) ? (
      <ClickedButton>Saved</ClickedButton>
    ) : (
      <ItemButton onClick={onClickSaveForLater.bind(this, curr._id)}>
        Save
      </ItemButton>
    );

    return (
      <ListItem key={curr._id}>
        <FigureContainer />
        <TextContainer>
          <div>
            <Link to={`/product/${curr._id}`}>{curr.name}</Link>
          </div>
          <div>{curr.summaryDescription}</div>
          <div>{curr.category}</div>
          <ItemControl>
            {upped}
            {subbed}
            {saved}
            <ItemButton onClick={onClickCloseButton.bind(this, curr._id)}>
              X
            </ItemButton>
          </ItemControl>
        </TextContainer>
      </ListItem>
    );
  });

  return <Card header="All the items are here.">{listOfItems}</Card>;
};

List.propTypes = {
  username: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onClickCloseButton: PropTypes.func.isRequired,
  onClickUpvote: PropTypes.func.isRequired,
  onSubscribe: PropTypes.func.isRequired,
  onClickSaveForLater: PropTypes.func.isRequired
};

export default List;
