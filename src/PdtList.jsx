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
  font-size: 1rem;
  line-height: 1.3333vw;
  position: relative;
  width: 100%;
`;

const SummaryText = styled.section`
  @media (min-width: 1023px) {
    display: block;
  }
  display: none;
  font-size: 0.8rem;
`;

const CategorySection = styled.section`
  @media (min-width: 850px) {
    display: block;
  }
  display: none;
`;

const ItemControl = styled.aside`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.primaryColour};
  text-decoration: none;

  &:visited {
    color: ${props => props.theme.primaryColour};
  }
`;

const ItemButton = styled.button`
  background: white;
  border: 2px solid ${props => props.theme.primaryColour};
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  margin-left: 2px;

  &:hover {
    background: ${props => props.theme.primaryColour};
    color: white;
  }

  &:hover ${StyledLink} {
    color: white;
  }
`;

const ClickedButton = styled(ItemButton)`
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
      <ItemButton onClick={e => onClickUpvote(curr._id, e)}>+</ItemButton>
    );
    const subbed = curr.subscribed.includes(username) ? (
      <ClickedButton>Subbed</ClickedButton>
    ) : (
      <ItemButton onClick={e => onSubscribe(curr._id, e)}>Sub</ItemButton>
    );
    const saved = curr.saved.includes(username) ? (
      <ClickedButton>Saved</ClickedButton>
    ) : (
      <ItemButton onClick={e => onClickSaveForLater(curr._id, e)}>
        Save
      </ItemButton>
    );

    return (
      <ListItem key={curr._id}>
        <FigureContainer />
        <TextContainer>
          <section>
            <StyledLink to={`/product/${curr._id}`}>{curr.name}</StyledLink>
          </section>
          <SummaryText>
            {curr.summaryDescription.length > 80
              ? curr.summaryDescription.slice(0, 80).concat("...")
              : curr.summaryDescription}
          </SummaryText>
          <CategorySection>
            <ItemButton>
              <StyledLink to={`/category/${curr.category[0]}`}>
                {curr.category[0]}
              </StyledLink>
            </ItemButton>
          </CategorySection>
          <ItemControl>
            {upped}
            {subbed}
            {saved}
            <ItemButton onClick={e => onClickCloseButton(curr._id, e)}>
              X
            </ItemButton>
          </ItemControl>
        </TextContainer>
      </ListItem>
    );
  });

  return (
    <Card header="All the items are here.">
      {listOfItems.length === 0 ? (
        <p>In this case, there aren't any. Add some above.</p>
      ) : (
        listOfItems
      )}
    </Card>
  );
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
