import React from "react";
import styled from "styled-components";

//TODO: Styles are not being extended and supplanting the old ones.
//TODO: Don't know why.
const ErrorCard = styled.section`
  margin-top: 1vw;
  padding: 1vw;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const Root = ({ children }) => {
  return children ? (
    <ErrorCard>{children}</ErrorCard>
  ) : (
    <ErrorCard>
      <h1>Something's gone wrong.</h1>
      Please try again later and/or maybe send an email suggesting that there is
      something wrong.
    </ErrorCard>
  );
};

export default Root;
