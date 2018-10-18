import React from "react";
import styled from "styled-components";
import Card from "./Card.jsx";

//TODO: Styles are not being extended and supplanting the old ones.
//TODO: Don't know why.
const ErrorCard = styled(Card)`
  margin-top: 20vw;
`;
const Root = ({ children }) => {
  return children ? (
    <ErrorCard>{children}</ErrorCard>
  ) : (
    <ErrorCard header="Something has gone wrong">
      Please try again later and/or maybe send an email suggesting that there is
      something wrong.
    </ErrorCard>
  );
};

export default Root;
