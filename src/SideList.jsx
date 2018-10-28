import React from "react";
import styled from "styled-components";

const Container = styled.section`
  box-sizing: border-box;
`;

const ConHeader = styled.h1`
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
  margin-bottom: 0.5vw;
`;
const ConSubHeader = styled.h2`
  font-size: 13px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  padding-bottom: 1vw;
  margin-bottom: 0vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Root = ({ header, subheader, children }) => {
  if (header && subheader) {
    return (
      <Container>
        <ConHeader>{header}</ConHeader>
        <ConSubHeader>{subheader}</ConSubHeader>
        {children}
      </Container>
    );
  } else {
    return <Container>{children}</Container>;
  }
};

export default Root;
