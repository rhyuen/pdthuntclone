import React from "react";
import styled from "styled-components";

const ListItem = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 1vw 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 1vw;
  }
`;
const ProductListItem = props => {
  return <ListItem>{props.children}</ListItem>;
};

export default ProductListItem;
